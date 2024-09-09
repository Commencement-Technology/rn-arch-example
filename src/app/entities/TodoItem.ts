import { Coordinates } from "./Coordinates"

export class TodoItem {
    id: null | number
    value: string
    coordinates: Coordinates
    completed: boolean
    completionTime?: number
    distanceToCurrentPosition?: number

    constructor(
        id: null | number,
        value: string,
        latitude: number,
        longitude: number,
        completed: boolean,
        completionTime?: number | null) {
        this.id = id
        this.value = value
        this.coordinates = new Coordinates(latitude, longitude)
        this.completed = completed
        this.completionTime = completed && completionTime !== null ? completionTime : undefined
    }

    makeCompleted(completionTime: number) {
        this.completed = true
        this.completionTime = completionTime
    }

    makeNotCompleted() {
        this.completed = false
        this.completionTime = undefined
    }

    setDistanceToCurrentPosition(distance: number) {
        this.distanceToCurrentPosition = distance
    }
}