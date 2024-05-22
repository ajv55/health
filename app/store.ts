import {configureStore} from '@reduxjs/toolkit';
import progressReducer from './slices/progressSlice';
import mealReducer from './slices/mealSlice';
import waterReducer from './slices/waterSlice';
import exerciseReducer from './slices/exerciseSlice';
import workoutReducer from './slices/workoutSlice';
import nutritionReducer from './slices/nutritionSlice';
import searchWorkoutReducer from './slices/searchWorkoutSlice';
import generateReducer from './slices/generateSlice';

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
        nutrition: nutritionReducer,
        searchWorkout: searchWorkoutReducer,
        generate: generateReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware(defaultMiddlewareConfig),
    

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch