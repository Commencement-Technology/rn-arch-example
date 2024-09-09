import { TodoItem } from "../entities/TodoItem"
import { AddTodoItemInterface, ChangeItemStatusInterface, DeleteAllInterface, GetAllItemsInterface, SaveToFileInterface } from "../services/interfaces/ApplicationServiceInterfaces"
import { ControllerBase, Response } from "./base/ControllerBase"

export class ToDoItemController extends ControllerBase {
    /*
    This could grow really fast, so you may have multiple controllers that responsible for certain domains
    */

    addToDoItemService: AddTodoItemInterface
    changeItemStatusService: ChangeItemStatusInterface
    deleteAllService: DeleteAllInterface
    getAllItemsService: GetAllItemsInterface
    saveToFileService: SaveToFileInterface

    constructor(
        addToDoItemService: AddTodoItemInterface,
        changeItemStatusService: ChangeItemStatusInterface,
        deleteAllService: DeleteAllInterface,
        getAllItemsService: GetAllItemsInterface,
        saveToFileService: SaveToFileInterface,
    ) {
        super()
        this.addToDoItemService = addToDoItemService
        this.changeItemStatusService = changeItemStatusService
        this.deleteAllService = deleteAllService
        this.getAllItemsService = getAllItemsService
        this.saveToFileService = saveToFileService
    }

    /*
        Each method is wrapped inside super.execute that provides a way to handle errors.
    */

    addTodoItem(value: string): Promise<Response<TodoItem>> {
        return super.execute(this.addToDoItemService.execute.bind(this, value))
    }

    changeItemStatus(id: number, completed: boolean): Promise<Response<void>> {
        return super.execute(this.changeItemStatusService.execute.bind(this, id, completed))
    }

    deleteAll(): Promise<Response<void>> {
        return super.execute(this.deleteAllService.execute)
    }

    getAllItems(): Promise<Response<TodoItem[]>> {
        return super.execute(this.getAllItemsService.execute)
    }

    saveToFiles(): Promise<Response<void>> {
        return super.execute(this.saveToFileService.execute)
    }

}