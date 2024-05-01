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
            state.exercises = state.exercises.filter((exercise: any, i: number) => exercise?.Challenges?.exercise !== action.payload)

        }
    }
})

export const {setExercises, completedExercise} = exerciseSlice.actions;

export default exerciseSlice.reducer;

