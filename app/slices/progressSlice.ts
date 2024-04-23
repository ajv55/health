import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ProgressState{
    value: number
}

const initialState: ProgressState = {
    value: 0
} as ProgressState

export const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        incrementProgress: (state, action) => {
            state.value += action.payload;
        },
        decrementProgress: (state, action) => {
            state.value -= action.payload

        }
    }
})

export const {incrementProgress, decrementProgress} = progressSlice.actions;

export const selectProgress = (state:RootState) => state.progress.value;

export default progressSlice.reducer