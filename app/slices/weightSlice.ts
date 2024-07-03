import { createSlice } from "@reduxjs/toolkit";

interface WeightState  {
    daysToLoseWeight?: number,
    weeks?: Date,
    recommend?: number,
    currentDate?: Date,
    currentProteinPercentage?: number,
    currentCarbsPercentage?: number,
    currentFatPercentage?: number

}

const initialState: WeightState = {
    daysToLoseWeight: 0,
    weeks: new Date(),
    recommend: 0,
    currentDate: new Date(),
    currentProteinPercentage: 0,
    currentCarbsPercentage: 0,
    currentFatPercentage: 0
}


export const weightSlice = createSlice({
    name: 'weight',
    initialState,
    reducers: {
        setDaysToLoseWeight: (state, action) => {
            state.daysToLoseWeight = action.payload
        },
        setWeeks: (state, action) => {
            state.weeks = action.payload
        },
        setRecommend: (state, action) => {
            state.recommend = action.payload
        },
        setCurrentDate: (state, action) => {
            state.currentDate = action.payload
        },
        setCurrentProteinPercentage: (state, action) => {
            state.currentProteinPercentage = action.payload
        },
        setCurrentCarbsPercentage: (state, action) => {
            state.currentCarbsPercentage = action.payload
        },
        setCurrentFatPercentage: (state, action) => {
            state.currentFatPercentage = action.payload
        },
      }
})


export const {setDaysToLoseWeight, setWeeks, setRecommend, setCurrentDate, setCurrentCarbsPercentage, setCurrentFatPercentage, setCurrentProteinPercentage} = weightSlice.actions;

export default weightSlice.reducer;