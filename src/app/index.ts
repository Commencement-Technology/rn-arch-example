import { AppController } from "./controllers/AppController"
import { LoginController } from "./controllers/LoginController"
import { ToDoItemController } from "./controllers/ToDoItemController"
import { DatabaseRepository } from "./repositories/DatabaseRepository"
import { FilesystemRepository } from "./repositories/FilesystemRepository"
import { GeolocationRepository } from "./repositories/GeolocationRepository"
import { NetInfoRepository } from "./repositories/NetInfoRepository"
import { NetworkRepository } from "./repositories/NetworkRepository"
import { PermissionRepository } from "./repositories/PermissionRepository"
import { AddTodoItem } from "./services/AddTodoItem"
import { ChangeItemStatus } from "./services/ChangeItemStatus"
import { DeleteAll } from "./services/DeleteAll"
import { GetAllItems } from "./services/GetAllItems"
import { Haversine } from "./services/Haversine"
import { Intialize } from "./services/Initialize"
import { Login } from "./services/Login"
import { SaveToFile } from "./services/SaveToFile"

/*

This is where we create an instance of repositories, services and controllers that we will then export to the frontend side of the app.

*/


//Repositories
const databaseRepo = new DatabaseRepository()
const networkRepo = new NetworkRepository()
const filesystemRepo = new FilesystemRepository()
const geolocationRepo = new GeolocationRepository()
const netInfoRepo = new NetInfoRepository()
const permissionRepo = new PermissionRepository()

//General services
const haversineService = new Haversine()


//Application services
const addTodoItemService = new AddTodoItem(databaseRepo, geolocationRepo, permissionRepo)
const changeItemStatusService = new ChangeItemStatus(databaseRepo)
const deleteAllService = new DeleteAll(databaseRepo)
const getAllItemsService = new GetAllItems(databaseRepo, haversineService, geolocationRepo, permissionRepo)
const initializeService = new Intialize(databaseRepo)
const loginService = new Login(networkRepo, netInfoRepo)
const saveToFileService = new SaveToFile(databaseRepo, filesystemRepo)


//Controllers

/*

Instances of Controllers are exported and can be used inside hooks in the application

*/

export const appController = new AppController(initializeService)

export const loginController = new LoginController(loginService)

export const toDoItemController = new ToDoItemController(
    addTodoItemService,
    changeItemStatusService,
    deleteAllService,
    getAllItemsService,
    saveToFileService)
