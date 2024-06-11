import { createSlice } from "@reduxjs/toolkit";

interface LogState  {
    logModal?: boolean,
    breakfastModal?: boolean,
    lunchModal?: boolean,
    dinnerModal?: boolean,
    snackModal?: boolean,
    isFocused?: boolean,
    isFocusedOn?: string,
}

const initialState: LogState = {
    logModal: false,
    breakfastModal: false,
    lunchModal: false,
    dinnerModal: false,
    snackModal: false,
    isFocused: false,
    isFocusedOn: '',
}

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        setLogModal: (state, action) => {
            state.logModal = action.payload
        },
        setBreakfastModal: (state, action) => {
            state.breakfastModal = action.payload
        },
        setLunchModal: (state, action) => {
            state.lunchModal = action.payload
        },
        setDinnerModal: (state, action) => {
            state.dinnerModal = action.payload
        },
        setSnackModal: (state, action) => {
            state.snackModal = action.payload
        },
        setIsFocused: (state, action) => {
            state.isFocused = action.payload
        },
        setIsFocusedOn: (state, action) => {
            state.isFocusedOn = action.payload
        }
    }
})

export const {setLogModal, setBreakfastModal, setDinnerModal, setLunchModal, setSnackModal, setIsFocused, setIsFocusedOn } = logSlice.actions;

export default logSlice.reducer;