import React from 'react'
import { View, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../navigators/RootNavigator'


type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

function HomeScreen({ route, navigation }: HomeScreenProps): React.JSX.Element {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default HomeScreen