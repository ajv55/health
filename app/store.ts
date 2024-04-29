import {configureStore} from '@reduxjs/toolkit';
import progressReducer from './slices/progressSlice';
import mealReducer from './slices/mealSlice';
import waterReducer from './slices/waterSlice';
import exerciseReducer from './slices/exerciseSlice';

export const store = configureStore({
    reducer: {
        progress: progressReducer,
        meal: mealReducer,
        water: waterReducer,
        exercise: exerciseReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch