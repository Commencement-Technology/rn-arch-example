This is an example app that utilizes React Native with feature based layered architecture

## What this app does

This is a simple To Do List application with a couple adjustments

- Login screen that imitates HTTP request to backend (username: user, password: qwerty)

- To do items are stored in SQLite. When added, user's current position is recorded along with the position

- When items displayed the distance between current user position and position of when to do items was created will be calculated

- Save to file button allows to create txt file in application folder with all the to do items.

The reason of adding these adjustments is to show how data repositories can be combined inside the app, and be reused in its different parts.

## 