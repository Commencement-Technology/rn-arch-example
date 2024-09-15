import { PermissionsAndroid } from "react-native";

export class PermissionRepository {
    constructor() { }

    async requestLocationPermission() {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        if (!granted)
            throw new Error('Permission was not granted')
    }
}