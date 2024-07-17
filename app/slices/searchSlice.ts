import { createSlice } from "@reduxjs/toolkit";

interface SearchState  {
    activeTab?: string,
    recipeModal?: boolean,
    recipe?: {}
}

const initialState: SearchState = {
    activeTab: 'summary',
    recipeModal: false,
    recipe: {}
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setRecipeModal: (state, action) => {
            state.recipeModal = action.payload
        },
        setRecipe: (state, action) => {
            state.recipe = action.payload
        }
    }
})

export const {setActiveTab, setRecipeModal, setRecipe} = searchSlice.actions;

export default searchSlice.reducer

