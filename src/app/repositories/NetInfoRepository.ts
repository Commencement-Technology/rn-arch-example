import NetInfo from '@react-native-community/netinfo'
import { NetInfoRepoInterface } from './interfaces/RepositoryInterfaces'

export class NetInfoRepository implements NetInfoRepoInterface {
    constructor() { }

    async checkConnection(): Promise<boolean> {
        // Checks if there is a internet access on the device
        try {
            const isReachable = (await NetInfo.fetch()).isInternetReachable
            if (isReachable === null)
                throw 'oops'
            else return isReachable
        }
        catch (er) {
            throw new Error('Unable to get connectivity status')
        }
    }
}