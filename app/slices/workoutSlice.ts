import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface WorkoutState {
    modalOpen?: boolean,
    deleteModal?: boolean,
    list?: [],
    workoutData?: WorkoutData,
    selectWorkout?: SelectWorkout,
    workoutList?: object
}

interface SelectWorkout {
    workout?: string;
    date?: Date;
    time?: Date | string;
    exercise?: string;
    reps?: string;
    sets?: string;
    id?: string
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
    deleteModal: false,
    workoutList: {},
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
        },
        setSelectWorkout: (state, action) => {
            state.selectWorkout = action.payload
        },
        setDeleteModal: (state, action) => {
            state.deleteModal = action.payload
        },
        setWorkoutList: (state, action) => {
            state.workoutList = action.payload
        }
    },
})

export const {setModalOpen, setList ,setWorkoutData, setSelectWorkout, setDeleteModal, setWorkoutList} = workoutSlice.actions;

export default workoutSlice.reducer;


