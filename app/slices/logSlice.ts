import { createSlice } from "@reduxjs/toolkit";

interface LogState  {
    logModal?: boolean,
    breakfastModal?: boolean,
    lunchModal?: boolean,
    dinnerModal?: boolean,
    snackModal?: boolean,
    isFocused?: boolean,
    isFocusedOn?: string,
    meal?: string,
    userMealLogs?: [],
    userLunchLogs?: [],
    userDinnerLogs?: [],
    userSnackLogs?: [],
    optionsModal?: boolean,
    stepsModal?: boolean 
}

const initialState: LogState = {
    logModal: false,
    breakfastModal: false,
    lunchModal: false,
    dinnerModal: false,
    snackModal: false,
    isFocused: false,
    isFocusedOn: '',
    meal: '',
    userMealLogs: [],
    userLunchLogs: [],
    userDinnerLogs: [],
    userSnackLogs: [],
    optionsModal: false,
    stepsModal: false
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
        },
        setMeal: (state, action) => {
            state.meal = action.payload
        },
        resetModals: (state) =>  {
            state.breakfastModal = false;
            state.lunchModal = false;
            state.dinnerModal = false;
            state.snackModal = false;
          }, 
        setUserMealLogs: (state, action) => {
            state.userMealLogs = action.payload
        },
        setOptionsModal: (state, action) => {
            state.optionsModal = action.payload
        },
        setLunchLog: (state, action) => {
            state.userLunchLogs = action.payload
        },
        setDinnerLog: (state, action) => {
            state.userDinnerLogs = action.payload
        },
        setSnackLog: (state, action) => {
            state.userSnackLogs = action.payload
        },
        setStepsModal: (state, action) => {
            state.stepsModal = action.payload
        }
    }
})

export const {setLogModal, setBreakfastModal, setDinnerModal, setLunchModal, setSnackModal, setIsFocused, setIsFocusedOn, setMeal, resetModals, setUserMealLogs, setOptionsModal, setLunchLog, setDinnerLog, setSnackLog, setStepsModal } = logSlice.actions;

export default logSlice.reducer;