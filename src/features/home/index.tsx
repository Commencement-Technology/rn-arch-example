import React, { useCallback } from "react"
import { View, StyleSheet, Text, FlatList, FlatListProps, FlatListComponent, ListRenderItem, Button } from "react-native"
import { ToDoListItem, useToDoList } from "./hooks/useToDoList"
import ListItem from "./components/ListItem"
import ToDoItemInput from "./components/ToDoItemInput"


type HomeProps = {}


function Home({ }: HomeProps): React.JSX.Element {
    const { loading, items, loadItems, addItem, deleteAllItems, saveToFile, toggleStatus } = useToDoList()

    const renderItem: ListRenderItem<ToDoListItem> = useCallback(({ item, index }) => <ListItem
        completed={item.completed}
        distance={item.distance}
        title={item.title}
        completionDate={item.completionDate}
        index={index}
        id={item.id}
        toggleStatus={toggleStatus} />, [])

    const keyExtractor = useCallback((item: ToDoListItem) => String(item.id), [])

    return (
        <View
            style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                refreshing={loading}
                onRefresh={loadItems}
                ListHeaderComponent={
                    <ToDoItemInput addItem={addItem} />
                }
                ListFooterComponent={
                    <View>
                        <Button
                            title='Save to file'
                            onPress={saveToFile} />
                        <Button
                            title='Delete all items'
                            onPress={deleteAllItems} />
                    </View>
                }
                data={items}
                renderItem={renderItem}
                keyExtractor={keyExtractor} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1
    },
})

export default Home