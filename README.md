This is an example app that utilizes React Native with feature based layered architecture

## What this app does

This is a simple To Do List application with a couple adjustments

- Login screen that imitates HTTP request to backend (username: user, password: qwerty)

- To do items are stored in SQLite. When added, user's current position is recorded along with the position

- When items displayed the distance between current user position and position of when to do items was created will be calculated and displayed

- Save to file button allows to create txt file in application folder with all the to do items.

The reason of adding these adjustments is to show how data repositories can be combined inside the app, and be reused in its different parts.

## Stack

[React Ntaive 0.75.2](https://github.com/facebook/react-native)

Navigation - [React Navigation](https://reactnavigation.org/)

State Managment - [Redux + Toolkit](https://react-redux.js.org/)

Database - SQLite - [op-sqlite](https://github.com/OP-Engineering/op-sqlite)

[react-native-netinfo](https://github.com/react-native-netinfo/react-native-netinfo), [react-native-fs](https://github.com/itinance/react-native-fs), [react-native-geolocation](https://github.com/michalchudziak/react-native-geolocation)

Check the [article](https://medium.com/@andrei.lomtev/architecture-pattern-for-react-native-applications-906fff65ebf8)