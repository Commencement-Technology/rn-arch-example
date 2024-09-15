import { useState } from "react"
import { loginController } from "../../../app"
import { alert } from "../../../helpers/alert"
import { useDispatch } from "react-redux"
import { setIsLoggedIn } from "../../../store/global"

type useLoginProps = {
    navigateToHome: () => unknown
}

export const useLogin = ({ navigateToHome }: useLoginProps) => {
    const [isLogginIn, setIsLogginIn] = useState(false)
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()

    const login = async () => {
        setIsLogginIn(true)
        const { isOk, error } = await loginController.login(username, password)
        if (!isOk) {
            alert(error!)
            setIsLogginIn(false)
        }
        else
            dispatch(setIsLoggedIn(true))
    }

    return {
        username,
        password,
        isLogginIn,
        setUsername,
        setPassword,
        login
    }
}