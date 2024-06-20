import { createSlice } from "@reduxjs/toolkit";

interface WeightState  {
    daysToLoseWeight?: number,
    weeks?: Date,
    recommend?: number

}

const initialState: WeightState = {
    daysToLoseWeight: 0,
    weeks: new Date(),
    recommend: 0
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
        }
      }
})


export const {setDaysToLoseWeight, setWeeks, setRecommend} = weightSlice.actions;

export default weightSlice.reducer;