import { Coordinates } from "../../entities/Coordinates"
import { TodoItem } from "../../entities/TodoItem"

export interface DatabaseRepoInterface {
    initialize: () => Promise<void>
    create: (todo: TodoItem) => Promise<TodoItem>
    update: (todo: TodoItem) => Promise<void>
    getById: (id: number) => Promise<TodoItem>
    deleteAll: () => Promise<void>
    getAll: () => Promise<TodoItem[]>
    reset: () => void
}

export interface FilesystemRepoInterface {
    writeFile: (content: string, filename: string) => Promise<void>
}

export interface GeolocationRepoInterface {
    getCurrentPositionCoordinates: () => Promise<Coordinates>
}

export interface NetInfoRepoInterface {
    checkConnection: () => Promise<boolean>
}

export interface NetworkRepoInterface {
    loginRequest: (login: string, password: string) => Promise<boolean>
}