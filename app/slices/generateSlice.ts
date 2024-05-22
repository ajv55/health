import { createSlice } from "@reduxjs/toolkit";

interface GenerateState {
    mealPlan: {}
}

const initialState: GenerateState = {
    mealPlan: {}
}

export const generateSlice = createSlice({
    name: 'generate',
    initialState,
    reducers: {
        setMealPlan: (state, action) => {
            state.mealPlan = action.payload
        }
    }
})

export const {setMealPlan} = generateSlice.actions;

export default generateSlice.reducer;