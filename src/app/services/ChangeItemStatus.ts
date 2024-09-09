import { DatabaseRepoInterface } from "../repositories/interfaces/RepositoryInterfaces"
import { ChangeItemStatusInterface } from "./interfaces/ApplicationServiceInterfaces"

export class ChangeItemStatus implements ChangeItemStatusInterface {
    databaseRepo: DatabaseRepoInterface
    constructor(databaseRepo: DatabaseRepoInterface) {
        this.databaseRepo = databaseRepo
    }

    async execute(id: number, completed: boolean): Promise<void> {
        /*
        This service updates "completed" status of the todo with the given id in the database.

        We need to get todoItem from the respo before updating it. Not a big deal in case of local database, but could be an issue when making http-request.
        One way to solve it, would be query caching. Another - passing more arguments from state to create todoItem from scratch.
        */
        const todoItem = await this.databaseRepo.getById(id)

        if (completed) {
            /*
                Date can also be in a separate repository. 
                It could be beneficial in cases when you want to fecth timestamp from a server rather than obtaining it from the device.
            */
            const completionTime = Date.now()
            todoItem.makeCompleted(completionTime)
        }
        else
            todoItem.makeNotCompleted()

        await this.databaseRepo.update(todoItem)

        /*  
            We could have updateStatus method in repository, that would only accept completed and completionTime arguments, however current way is more universal.

            For example, we may want to have a way to update coordinates in future in a separate service. Then, we could use update method from database repository, 
            instead of creating updateCoordinates method and changing DatabaseRepoInterface.
        */
    }
}