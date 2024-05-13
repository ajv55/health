import { createSlice } from "@reduxjs/toolkit";

interface searchWorkoutState {
    list: [],
    isLoading: boolean,
}

 const initialState: searchWorkoutState = {
    list: [],
    isLoading: false,
} as searchWorkoutState


export const searchWorkoutSlice = createSlice({
    name: 'searchWorkout',
    initialState,
    reducers: {
        setSearchWorkout: (state, action) => {
            state.list = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})


export const {setSearchWorkout, setIsLoading} = searchWorkoutSlice.actions;

export default searchWorkoutSlice.reducer; 