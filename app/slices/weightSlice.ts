import { createSlice } from "@reduxjs/toolkit";

interface WeightState  {
    daysToLoseWeight?: number,
    weeks?: Date,

}

const initialState: WeightState = {
    daysToLoseWeight: 0,
    weeks: new Date(),
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
        }
      }
})


export const {setDaysToLoseWeight, setWeeks} = weightSlice.actions;

export default weightSlice.reducer;