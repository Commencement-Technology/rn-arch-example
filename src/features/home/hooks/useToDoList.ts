import { useCallback, useEffect, useState } from "react"
import { toDoItemController } from "../../../app"
import { getToDoListItem } from "../helpers/functions"
import { alert, success } from "../../../helpers/alert"

export type ToDoListItem = {
    id: number | null
    title: string
    completed: boolean
    completionDate: string
    distance: string
}

export const useToDoList = () => {
    const [loading, setLoading] = useState(true)

    const [items, setItems] = useState<ToDoListItem[]>([])

    const loadItems = useCallback(async () => {
        setLoading(true)
        const { isOk, response, error } = await toDoItemController.getAllItems()
        if (isOk)
            setItems((response!.map(item => getToDoListItem(item))))
        else
            alert(error!)
        setLoading(false)
    }, [])

    useEffect(() => {
        loadItems()
    }, [])


    const addItem = useCallback(async (title: string) => {
        const { isOk, response, error } = await toDoItemController.addTodoItem(title)
        if (isOk) {
            setItems(state => state.concat(getToDoListItem(response!)))
        }
        else
            alert(error!)
    }, [])

    const deleteAllItems = useCallback(async () => {
        const { isOk, error } = await toDoItemController.deleteAll()
        if (isOk)
            setItems([])
        else
            alert(error!)

    }, [])

    const saveToFile = useCallback(async () => {
        const { isOk, error } = await toDoItemController.saveToFiles()
        if (isOk)
            success('File successfully created')
        else
            alert(error!)
    }, [])

    const toggleStatus = useCallback(async (id: number, index: number, currentStatus: boolean) => {
        const { isOk, error, response } = await toDoItemController.changeItemStatus(id, !currentStatus)
        if (isOk)
            setItems(state => Object.assign([], state,
                {
                    [index]: getToDoListItem(response!)
                }))
        else
            alert(error!)
    }, [])


    return {
        loading,
        items,
        loadItems,
        addItem,
        deleteAllItems,
        saveToFile,
        toggleStatus
    }
}