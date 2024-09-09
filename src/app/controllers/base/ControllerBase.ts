export type Response<Type> = {
    response: Type | null,
    isOk: boolean,
    error: string | null
}

export abstract class ControllerBase {
    // Base class for controller, with a wrapper method that goes around service function.
    // It will catch errors in services and repositories and return isOk flag along with the data
    constructor() {
    }

    async execute<Type>(service: () => Promise<Type> | Type): Promise<Response<Type>> {
        try {
            const result: Type = await service()
            return {
                response: result,
                isOk: true,
                error: null
            }
        }
        catch (er) {
            return {
                response: null,
                isOk: false,
                error: String(er),
            }
        }
    }
}