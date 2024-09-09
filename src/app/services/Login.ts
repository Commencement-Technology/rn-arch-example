import { NetInfoRepoInterface, NetworkRepoInterface } from "../repositories/interfaces/RepositoryInterfaces"
import { LoginInterface } from "./interfaces/ApplicationServiceInterfaces"


export class Login implements LoginInterface {
    networkRepo: NetworkRepoInterface
    netInfoRepo: NetInfoRepoInterface
    constructor(networkRepo: NetworkRepoInterface, netInfoRepo: NetInfoRepoInterface) {
        this.networkRepo = networkRepo
        this.netInfoRepo = netInfoRepo
    }

    async execute(password: string, login: string) {
        /*
        This service authenticates user in our app. Before sending request to http server it checks if the device can reach internet.

        Wrapper around netinfo library allows to use alias inside our codebase. 
        If we ever want to replace netinfo package, this service will not be affected.
        */

        const isInternetReachable = await this.netInfoRepo.checkConnection()
        if (isInternetReachable) {
            return this.networkRepo.loginRequest(login, password)
        }
        else
            throw new Error('No internet')
    }
}