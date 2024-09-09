import { DatabaseRepoInterface } from "../repositories/interfaces/RepositoryInterfaces"
import { InitializeInterface } from "./interfaces/ApplicationServiceInterfaces"

export class Intialize implements InitializeInterface {
    databaseRepo: DatabaseRepoInterface
    constructor(databaseRepo: DatabaseRepoInterface) {
        this.databaseRepo = databaseRepo
    }

    async execute() {
        /*
            Here you can setup database, default app settings, initial login attempt when app starts etc.
        */
       
        await this.databaseRepo.initialize()
    }
}