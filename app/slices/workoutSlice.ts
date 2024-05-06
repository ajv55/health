import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface WorkoutState {
    modalOpen?: boolean
}

const initialState: WorkoutState = {
    modalOpen: false,
} as WorkoutState

export const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        setModalOpen: (state, action) => {
            state.modalOpen = action.payload
        }
    },
})

export const {setModalOpen} = workoutSlice.actions;

export default workoutSlice.reducer;


