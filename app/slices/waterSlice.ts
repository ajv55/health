import { createSlice, } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface WaterState{
    value: number
}

const initialState: WaterState = {
    value: 0
} as WaterState

export const waterSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        incrementDailyWater: (state, action) => {
            state.value += action.payload;
        },
        decrementProgress: (state, action) => {
            state.value -= action.payload

        }
    }
})

export const {incrementDailyWater} = waterSlice.actions;

export const selectProgress = (state:RootState) => state.progress.value;

export default waterSlice.reducer