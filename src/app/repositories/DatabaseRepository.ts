import { DB, open } from '@op-engineering/op-sqlite'
import { TodoItem } from '../entities/TodoItem'
import { DatabaseRepoInterface } from './interfaces/RepositoryInterfaces'

export class DatabaseRepository implements DatabaseRepoInterface {
    db: DB

    constructor() {
        // You can have more than one database repository for each individual entity that your app uses
        this.db = open({
            name: 'todos.sqlite'
        })
    }

    async initialize(): Promise<void> {
        // Creating table on app launch.
        try {
            await this.db.executeAsync(
                'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY NOT NULL, value TEXT, latitude REAL, longitude REAL, completionTime INT, completed BOOLEAN)')
            return
        }
        catch (er) {
            throw new Error('Unable to initialize database')
        }
    }

    async create(todo: TodoItem): Promise<TodoItem> {
        // Inside this method we should describe how entity TodoItem should be created for the SQLite
        const { coordinates: { latitude, longitude }, value, completionTime, completed, id } = todo
        try {
            const { insertId } = await this.db.executeAsync(
                'INSERT INTO todos (id, value, latitude, longitude, completionTime, completed) VALUES (?,?,?,?,?,?)',
                [value, latitude, longitude, completionTime, completed, id])
            if (insertId !== undefined)
                return new TodoItem(insertId, value, latitude, longitude, completed, completionTime)
            else
                throw 'oops'
        }
        catch (er) {
            throw new Error('Unable to add new todo item')
        }
    }

    async update(todo: TodoItem): Promise<void> {
        const { completed, completionTime, id } = todo
        try {
            const result = await this.db.executeAsync(
                'UPDATE todos SET completed=?, completionTime=? WHERE id=?',
                [completed, completionTime, id])
            if (result.rowsAffected === 0)
                throw 'oops'
        }
        catch (er) {
            throw new Error('Unable to update to do item')
        }
    }

    async getById(id: number): Promise<TodoItem> {
        try {
            const result = await this.db.executeAsync('SELECT * FROM todos WHERE id=?', [id])
            if (result.rows?.length === 0)
                throw 'oops'
            else {
                const { id, value, completed, completionTime, latitude, longitude } = result.rows?._array[0]
                return new TodoItem(id, value, latitude, longitude, completed, completionTime)
            }
        }
        catch (er) {
            throw new Error('Unable to update to do item')
        }
    }

    async deleteAll(): Promise<void> {
        // Deleting all for simplicity. In real application you may want to pass id and add WHERE in sql request.
        try {
            await this.db.executeAsync('DELETE from todos', [])
            return
        }
        catch (er) {
            throw new Error('Unable to delete todos')
        }
    }

    async getAll(): Promise<TodoItem[]> {
        // Repository methods must return entities rather than plain objects. It adds consistency and allows repositories to be detached from the services.
        try {
            const { rows } = await this.db.executeAsync('SELECT * FROM todos')
            const result: TodoItem[] = []
            rows?._array.forEach(({ value, latitude, longitude, completionTime, completed, id }) => {
                result.push(new TodoItem(id, value, latitude, longitude, completed, completionTime))
            })
            return result
        }
        catch (er) {
            throw new Error('Unable to delete config')
        }
    }

    reset() {
        try {
            return this.db.execute('DROP TABLE configs')
        }
        catch (er) {
            throw new Error('Unable to delete database')
        }
    }

}