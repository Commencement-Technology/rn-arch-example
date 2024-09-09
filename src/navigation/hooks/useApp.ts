import { useEffect } from "react"
import { useTypedSelector } from "../../store/global"
import { appController } from "../../app"

export const useApp = () => {

    //RootNavigator hook. Here we can write effects that run on app launch.

    //isLoggedIn belongs to global state. We can potentially use it in other parts of the app.
    const isLoggedIn = useTypedSelector(state => state.global.isLoggedIn)

    useEffect(() => {
        appController.initialize()
    }, [])

    return { isLoggedIn }
}