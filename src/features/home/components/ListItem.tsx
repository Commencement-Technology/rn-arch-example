import React from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"

type ListItemProps = {
    completed: boolean,
    distance: string,
    title: string,
    completionDate: string,
    index: number,
    id: number | null,
    toggleStatus: (id: number, index: number, currentStatus: boolean) => Promise<void>
}

function ListItem({ completed, distance, title, completionDate, index, id, toggleStatus }: ListItemProps): React.JSX.Element {
    const onPress = () => id !== null ? toggleStatus(id, index, completed) : null
    return (
        <Pressable
            onPress={onPress}
            style={completed ? styles.completed : styles.regular}>
            <Text>{title}</Text>
            {distance !== "" ? <Text>{distance}</Text> : null}
            {completed ? <Text>{completionDate}</Text> : null}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    completed: {
        backgroundColor: 'rgba(0,255,0,0.3)'
    },
    regular: {
    }

})

export default ListItem