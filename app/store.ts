import {configureStore} from '@reduxjs/toolkit';
import progressReducer from './slices/progressSlice';
import mealReducer from './slices/mealSlice';

export const store = configureStore({
    reducer: {
        progress: progressReducer,
        meal: mealReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch