import { DatabaseRepoInterface, GeolocationRepoInterface } from "../repositories/interfaces/RepositoryInterfaces"
import { GetAllItemsInterface } from "./interfaces/ApplicationServiceInterfaces"
import { HaversineServiceInterface } from "./interfaces/GeneralServiceInterfaces"

export class GetAllItems implements GetAllItemsInterface {
    databaseRepo: DatabaseRepoInterface
    haversineService: HaversineServiceInterface
    geolocationRepo: GeolocationRepoInterface
    constructor(databaseRepo: DatabaseRepoInterface, haversineService: HaversineServiceInterface, geolocationRepo: GeolocationRepoInterface) {
        this.databaseRepo = databaseRepo
        this.haversineService = haversineService
        this.geolocationRepo = geolocationRepo
    }

    async execute() {

        /*
        This service returns all the todos from our database. 
        It also calculates the distance from our current position to the position of when each individual todoItem was created.
        */

        const [coordinates, todoItems] = await Promise.all([
            //We can send these two requests to APIs in parallel to speed up the process
            this.geolocationRepo.getCurrentPositionCoordinates(),
            this.databaseRepo.getAll()
        ])

        todoItems.forEach(item => {
            //Need to watch out here. Haversine formula is an expensive calculation. When we have lots of todo items this may potentially freeze up the JS thread. It's here for example only.
            const distance = this.haversineService.execute(
                coordinates.latitude,
                coordinates.longitude,
                item.coordinates.latitude,
                item.coordinates.longitude)
            item.setDistanceToCurrentPosition(distance)
        })
        return todoItems
    }
}