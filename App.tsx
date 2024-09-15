import { configureStore } from '@reduxjs/toolkit';
import React from 'react'

import {
  StatusBar,
  StyleSheet,
} from 'react-native'
import { Provider } from 'react-redux';
import global from './src/store/global';
import AppNavigator from './src/navigation/navigators/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';


const store = configureStore({
  reducer: {
    global: global
  }
})

function App(): React.JSX.Element {
  return (
    <Provider
      store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
})

export default App;
