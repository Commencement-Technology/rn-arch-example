import { Alert } from "react-native"

export const alert = (message: string) => {
    Alert.alert('Error', message)
}
export const success = (message: string)=>{
    Alert.alert('Success', message)
}