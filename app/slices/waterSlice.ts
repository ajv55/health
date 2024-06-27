import { createSlice, } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface WaterState{
    value: number,
    waterModal?: boolean
}

const initialState: WaterState = {
    value: 0,
    waterModal: false
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
        },
        setWater: (state, action) => {
            state.value = action.payload
        },
        setWaterModal: (state, action) => {
            state.waterModal = action.payload
        }
    }
})

export const {incrementDailyWater, setWater, setWaterModal} = waterSlice.actions;

export const selectProgress = (state:RootState) => state.progress.value;

export default waterSlice.reducer