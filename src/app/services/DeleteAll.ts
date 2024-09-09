import { DatabaseRepoInterface } from "../repositories/interfaces/RepositoryInterfaces"
import { DeleteAllInterface } from "./interfaces/ApplicationServiceInterfaces"

export class DeleteAll implements DeleteAllInterface {
    databaseRepo: DatabaseRepoInterface


    constructor(databaseRepo: DatabaseRepoInterface,) {
        this.databaseRepo = databaseRepo
    }

    execute(): Promise<void> {
        /* 
        This service deletes all todo items in the databse.

        This is where the architecture may seem a bit exessive. 
        To make a simple database query, we are creating service, controller, and repository. 
        However, once we need to add more code to delete logic, the benefit of this architecture will be more clear.
        */
        return this.databaseRepo.deleteAll()
    }
}