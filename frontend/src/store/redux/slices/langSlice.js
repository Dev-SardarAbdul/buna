import { createSlice } from "@reduxjs/toolkit";

export const langDataSlice = createSlice({
    name: "Signed In user Data",
    initialState: {
        lang: null
    },
    reducers: {
        setUserData: (state, action) => {
            return {
                ...state,
                lang:  action.payload 
            };
        }
    },
});

export const {
    setUserData
} = langDataSlice.actions;
export const langDataReducer = langDataSlice.reducer;
