import { createSlice } from "@reduxjs/toolkit";

interface SearchState  {
    activeTab?: string
}

const initialState: SearchState = {
    activeTab: 'summary'
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        }
    }
})

export const {setActiveTab} = searchSlice.actions;

export default searchSlice.reducer

