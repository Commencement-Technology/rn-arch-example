import { InitializeInterface } from "../services/interfaces/ApplicationServiceInterfaces"
import { ControllerBase, Response } from "./base/ControllerBase"

export class AppController extends ControllerBase {
    /*
    Each controller is responsible for their individual domain or functionality.
    We only import interfaces here to detach controller from actual implementation of our repositories and services.
    */

    private initializeService: InitializeInterface

    constructor(initializeService: InitializeInterface) {
        super()
        this.initializeService = initializeService
    }

    /*
        Methods are wrapped inside super.execute that provides a way to handle errors.
    */

    initialize(): Promise<Response<void>> {
        return super.execute(this.initializeService.execute)
    }

}