import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/AuthScreen'
import HomeScreen from '../screens/HomeScreen'
import { useApp } from '../hooks/useApp'

export type RootStackParamList = {
    Auth: undefined
    Home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()


function AppNavigator(): React.JSX.Element {
    const { isLoggedIn } = useApp()
    return <>
        <Stack.Navigator
            initialRouteName="Auth">
            {
                !isLoggedIn ? (
                    <>
                        <Stack.Screen
                            name='Auth'
                            component={AuthScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name='Home'
                            component={HomeScreen} />
                    </>
                )}
        </Stack.Navigator>
    </>
}


export default AppNavigator