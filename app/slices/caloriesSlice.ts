import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CaloriesState {
    data: [],
}

const initialState: CaloriesState = {
    data: []
} as CaloriesState


export const caloriesSlice = createSlice({
    name: 'calories',
    initialState,
    reducers: {}
})


export default caloriesSlice.reducer