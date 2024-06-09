import { createSlice } from "@reduxjs/toolkit";

interface LogState  {
    logModal?: boolean
}

const initialState: LogState = {
    logModal: false
}

export const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        setLogModal: (state, action) => {
            state.logModal = action.payload
        }
    }
})

export const {setLogModal } = logSlice.actions;

export default logSlice.reducer;