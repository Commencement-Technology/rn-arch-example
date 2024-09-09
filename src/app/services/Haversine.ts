import { HaversineServiceInterface } from "./interfaces/GeneralServiceInterfaces"

export class Haversine implements HaversineServiceInterface {
    PiOver180 = Math.PI / 180
    R = 6371e3

    execute(lat1: number, lon1: number, lat2: number, lon2: number) {
        // Haversine formula calculates distance between two coordinates on a sphere
        const fi1 = lat1 * this.PiOver180
        const fi2 = lat2 * this.PiOver180
        const deltaL = (lon2 - lon1) * this.PiOver180
        const d = Math.acos(Math.sin(fi1) * Math.sin(fi2) + Math.cos(fi1) * Math.cos(fi2) * Math.cos(deltaL)) * this.R
        return Math.round(d)
    }
}