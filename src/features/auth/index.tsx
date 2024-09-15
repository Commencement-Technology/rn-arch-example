import React from "react"
import { View, StyleSheet, Button } from "react-native"
import { useLogin } from "./hooks/useLogin"
import Input from "./components/Input"

type AuthProps = {
    navigateToHome: () => unknown
}

function Auth({ navigateToHome }: AuthProps): React.JSX.Element {
    const { username, setUsername, password, setPassword, login } = useLogin({ navigateToHome })
    return (
        <View
            style={styles.container}>
            <Input
                label="Username"
                isPassword={false}
                value={username}
                setValue={setUsername} />
            <Input
                label="Username"
                isPassword={false}
                value={password}
                setValue={setPassword} />
            <Button
                title="Login"
                onPress={login} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
})

export default Auth