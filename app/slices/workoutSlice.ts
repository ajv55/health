import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface WorkoutState {
    modalOpen?: boolean,
    list?: [],
    workoutData?: WorkoutData
}

interface WorkoutData {
    workout?: string;
    date?: Date;
    time?: Date | string;
    exercise?: string;
    reps?: string;
    sets?: string;
}

const initialState: WorkoutState = {
    modalOpen: false,
    list: [],
    workoutData: {
        workout: '',
        date: new Date(),
        time: new Date().toLocaleTimeString(),
        exercise: '',
        reps: '',
        sets: ''
        },
} 

export const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        setModalOpen: (state, action) => {
            state.modalOpen = action.payload
        },
        setList: (state, action) => {
            state.list = action.payload
        },
        setWorkoutData: (state, action) => {
            state.workoutData = action.payload
        }
    },
})

export const {setModalOpen, setList ,setWorkoutData} = workoutSlice.actions;

export default workoutSlice.reducer;


