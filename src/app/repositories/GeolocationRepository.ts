import Geolocation from "@react-native-community/geolocation"
import { Coordinates } from "../entities/Coordinates"
import { GeolocationRepoInterface } from "./interfaces/RepositoryInterfaces"

export class GeolocationRepository implements GeolocationRepoInterface {
    constructor() { }

    getCurrentPositionCoordinates(): Promise<Coordinates> {
        // Geolocation takes callback fucntion rather than returns a value, so we wrap it inside Promise here
        try {
            return new Promise((resolve, reject) => {
                Geolocation.getCurrentPosition(
                    (position) => {
                        resolve(
                            new Coordinates(position.coords.latitude, position.coords.longitude))
                    },
                    er => reject(er))
            })
        }
        catch (er) {
            throw Error('Unable to get current position coordinates')
        }
    }
}