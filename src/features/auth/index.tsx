import React from "react"
import { View, StyleSheet, Button, Image } from "react-native"
import { useLogin } from "./hooks/useLogin"
import Input from "./components/Input"

type AuthProps = {
    navigateToHome: () => unknown
}

function Auth({ navigateToHome }: AuthProps): React.JSX.Element {
    const { username, setUsername, password, isLogginIn, setPassword, login } = useLogin({ navigateToHome })
    return (
        <View
            style={styles.container}>
            <Image source={require('../../assest/nature.jpg')}
                style={styles.image} />
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
                disabled={isLogginIn}
                title="Login"
                onPress={login} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20
    }
})

export default Auth