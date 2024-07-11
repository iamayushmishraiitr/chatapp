import { createSlice } from '@reduxjs/toolkit';

const alluserSlice = createSlice({
    name: "allUsers",
    initialState: {
        currentUser: [],
    },
    reducers: {
        alluserList: (state, action) => {
            state.currentUser = action.payload;
        },
    }
});

export const { alluserList} = alluserSlice.actions;
export default alluserSlice.reducer;
