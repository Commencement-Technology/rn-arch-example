import React from 'react'
import { View, StyleSheet } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../navigators/RootNavigator'
import Auth from '../../features/auth'


type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>

function AuthScreen({ navigation }: AuthScreenProps): React.JSX.Element {

    const navigateToHome = () => navigation.navigate('Home')

    return (
        <View style={styles.container}>
            <Auth
                navigateToHome={navigateToHome} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default AuthScreen