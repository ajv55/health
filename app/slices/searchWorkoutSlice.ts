import { createSlice } from "@reduxjs/toolkit";

interface searchWorkoutState {
    list: [],
}

 const initialState: searchWorkoutState = {
    list: []
} as searchWorkoutState


export const searchWorkoutSlice = createSlice({
    name: 'searchWorkout',
    initialState,
    reducers: {
        setSearchWorkout: (state, action) => {
            state.list = action.payload
        }
    }
})


export const {setSearchWorkout} = searchWorkoutSlice.actions;

export default searchWorkoutSlice.reducer; 