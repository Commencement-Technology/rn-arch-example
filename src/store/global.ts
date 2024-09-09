import { createSlice } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"

interface GlobalState {
    isLoggedIn: boolean
}

interface RootState {
    global: GlobalState
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const globalState = createSlice({
    name: 'global',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }

})

export default globalState.reducer


//Actions
export const { setIsLoggedIn } = globalState.actions