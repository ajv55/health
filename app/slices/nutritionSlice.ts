import { createSlice } from "@reduxjs/toolkit";

interface NutritionState  {
    nutritionList: any
}

const initialState: NutritionState = {
    nutritionList: {}
} 

export const nutritionSlice = createSlice({
    name: 'nutrition', 
    initialState,
    reducers: {
        setNutritionList: (state, action) => {
            state.nutritionList = action.payload
        }
    }
})

export const {setNutritionList} = nutritionSlice.actions;

export default nutritionSlice.reducer;

