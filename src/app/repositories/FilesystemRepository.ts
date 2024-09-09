import * as Filesystem from 'react-native-fs'
import { FilesystemRepoInterface } from './interfaces/RepositoryInterfaces'

export class FilesystemRepository implements FilesystemRepoInterface {
    appFolderPath = Filesystem.DocumentDirectoryPath
    constructor() {
    }

    writeFile(content: string, filename: string): Promise<void> {
        // Keep repository methods simple. However you could also add condition check here, wether there is enough space on the device
        try {
            return Filesystem.writeFile(`${this.appFolderPath}/${filename}`, content)
        }
        catch (er) {
            //You can log exact error for debuging
            throw Error('Unable to write file')
        }
    }
}