import { TodoItem } from "../../entities/TodoItem"

export interface AddTodoItemInterface {
    execute: (value: string) => Promise<TodoItem>
}

export interface ChangeItemStatusInterface {
    execute: (id: number, completed: boolean) => Promise<TodoItem>
}

export interface DeleteAllInterface {
    execute: () => Promise<void>
}

export interface GetAllItemsInterface {
    execute: () => Promise<TodoItem[]>
}

export interface LoginInterface {
    execute: (login: string, password: string) => Promise<void>
}

export interface SaveToFileInterface {
    execute: () => Promise<void>
}

export interface InitializeInterface {
    execute: () => Promise<void>
}