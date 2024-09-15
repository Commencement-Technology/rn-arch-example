import React from "react"
import { View, StyleSheet, TextInput, Button } from "react-native"
import { useToDoItemInput } from "../hooks/useToDoItemInput"

type ToDoItemInputProps = {
    addItem: (title: string) => Promise<void>
}

function ToDoItemInput({ addItem }: ToDoItemInputProps): React.JSX.Element {
    const { value, setValue, onSubmit } = useToDoItemInput({ addItem })
    return (
        <View
            style={styles.container}>
            <TextInput
                placeholder="Type here"
                onChangeText={setValue}
                value={value} />
            <Button
                title="Add to list"
                onPress={onSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
})

export default ToDoItemInput