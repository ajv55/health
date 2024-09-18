import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface WorkoutState {
    modalOpen?: boolean,
    deleteModal?: boolean,
    list?: [],
    workoutData?: WorkoutData,
    selectWorkout?: SelectWorkout,
    workoutList?: object,
    totalCalories?: number,
    exercisePlan?: null
    exercisePlanId?: string
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
    totalCalories: 0,
    exercisePlan: null,
    exercisePlanId: '',
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
        },
        setTotalCalories: (state, action) => {
            state.totalCalories = action.payload
        },
        setExercisePlan: (state, action) => {
            state.exercisePlan = action.payload
        },
        setExercisePlanId: (state, action) => {
            state.exercisePlanId = action.payload
        }
    },
})

export const {setModalOpen, setExercisePlanId, setExercisePlan, setList ,setWorkoutData, setSelectWorkout, setDeleteModal, setWorkoutList, setTotalCalories} = workoutSlice.actions;

export default workoutSlice.reducer;


