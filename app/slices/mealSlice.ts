import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initialState = {
    usersMeals: [],
}

const mealSlice = createSlice({
    name: 'usersMeals',
    initialState,
    reducers: {
        setUsersMeals(state, action) {
            state.usersMeals = action.payload
        }
    }
})

export const { setUsersMeals } = mealSlice.actions;

export default mealSlice.reducer;

