import { TodoItem } from "../../../app/entities/TodoItem"
import { formatTime } from "../../../helpers/time_converter"
import { ToDoListItem } from "../hooks/useToDoList"

// Functions should be feature specific (otherwise they should be in global helpers folder)
// Functions inside helpers should be used specifically for presentation logic (e.g. format time, distance, convert entity to a feature specific state value)

const convertDistance = (distance: number | undefined) => {
    if (distance === undefined)
        return ""
    if (distance < 1)
        return `${distance.toFixed(1)} m`
    else if (distance >= 1 && distance < 1000)
        return `${distance.toFixed(0)} m`
    else if (distance >= 1000 && distance < 100000)
        return `${(distance / 1000).toFixed(1)} km`
    else
        return `${(distance / 1000).toFixed(0)} km`

}

export const getToDoListItem = (item: TodoItem): ToDoListItem => {
    return {
        id: item.id,
        title: item.value,
        completed: item.completed,
        completionDate: formatTime(item.completionTime),
        distance: convertDistance(item.distanceToCurrentPosition),

    }
}




