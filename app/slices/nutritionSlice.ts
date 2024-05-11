import { createSlice } from "@reduxjs/toolkit";

interface NutritionState  {
    nutritionList: any,
    isLoading: boolean,
}

const initialState: NutritionState = {
    nutritionList: {},
    isLoading: false,
} 

export const nutritionSlice = createSlice({
    name: 'nutrition', 
    initialState,
    reducers: {
        setNutritionList: (state, action) => {
            state.nutritionList = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const {setNutritionList, setIsLoading} = nutritionSlice.actions;

export default nutritionSlice.reducer;

