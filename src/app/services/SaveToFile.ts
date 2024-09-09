import { DatabaseRepoInterface, FilesystemRepoInterface } from "../repositories/interfaces/RepositoryInterfaces"
import { SaveToFileInterface } from "./interfaces/ApplicationServiceInterfaces"

export class SaveToFile implements SaveToFileInterface {
    databaseRepo: DatabaseRepoInterface
    filesystemRepo: FilesystemRepoInterface

    constructor(databaseRepo: DatabaseRepoInterface, filesystemRepo: FilesystemRepoInterface) {
        this.databaseRepo = databaseRepo
        this.filesystemRepo = filesystemRepo
    }

    async execute(): Promise<void> {

        /*
        This service will create a file with all of todo items. 
        Instead of getting them from the state, we will get all the todoItems from the database and write them to file.
        */

        const todos = await this.databaseRepo.getAll()
        const content = JSON.stringify(todos)
        await this.filesystemRepo.writeFile(content, 'my_todos.txt')
    }
}