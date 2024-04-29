import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExerciseState {
    exercises: any
}

const initialState: ExerciseState = {
    exercises: []
} as ExerciseState

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        setExercises: (state, action) => {
            state.exercises = action.payload
        },
        completedExercise: (state, action: PayloadAction<any>) => {
            console.log('payload:', action.payload );
            state.exercises = state.exercises.filter((exercise: any) => exercise?.id !== action.payload)

        }
    }
})

export const {setExercises, completedExercise} = exerciseSlice.actions;

export default exerciseSlice.reducer;

