import {configureStore} from '@reduxjs/toolkit';
import progressReducer from './slices/progressSlice';
import mealReducer from './slices/mealSlice';
import waterReducer from './slices/waterSlice';
import exerciseReducer from './slices/exerciseSlice';
import workoutReducer from './slices/workoutSlice';
import nutritionReducer from './slices/nutritionSlice'

const defaultMiddlewareConfig = {
    serializableCheck: false
  };
  

export const store = configureStore({
    reducer: {
        progress: progressReducer,
        meal: mealReducer,
        water: waterReducer,
        exercise: exerciseReducer,
        workout: workoutReducer,
        nutrition: nutritionReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware(defaultMiddlewareConfig),
    

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch