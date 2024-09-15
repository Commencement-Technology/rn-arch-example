import { useState } from "react"
import { loginController } from "../../../app"
import { alert } from "../../../helpers/alert"

type useLoginProps = {
    navigateToHome: () => unknown
}

export const useLogin = ({ navigateToHome }: useLoginProps) => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const login = async () => {
        const { isOk, error } = await loginController.login(username, password)
        if (!isOk)
            alert(error!)
        else
            navigateToHome()
    }

    return {
        username,
        password,
        setUsername,
        setPassword,
        login
    }
}