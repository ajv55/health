import { createSlice } from "@reduxjs/toolkit";

interface WeightState  {
    daysToLoseWeight?: number,
    weeks?: Date,
    recommend?: number,
    currentDate?: Date,

}

const initialState: WeightState = {
    daysToLoseWeight: 0,
    weeks: new Date(),
    recommend: 0,
    currentDate: new Date()
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
        }
      }
})


export const {setDaysToLoseWeight, setWeeks, setRecommend, setCurrentDate} = weightSlice.actions;

export default weightSlice.reducer;