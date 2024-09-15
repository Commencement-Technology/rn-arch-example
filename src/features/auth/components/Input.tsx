import React from "react"
import { View, StyleSheet, Text, TextInput } from "react-native"

type InputProps = {
    value: string,
    setValue: (text: string) => unknown,
    label: string,
    isPassword: boolean
}

function Input({ value, setValue, label, isPassword }: InputProps): React.JSX.Element {
    return (
        <View
            style={styles.container}>
            <Text>{label}</Text>
            <TextInput
                value={value}
                secureTextEntry={isPassword}
                onChangeText={setValue} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
})

export default Input