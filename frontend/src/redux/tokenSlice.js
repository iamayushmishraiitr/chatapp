// tokenSlice.js
import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token: 1,
    },
    reducers: {
        getToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = null;
        },
    },
});

export const { getToken, removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;