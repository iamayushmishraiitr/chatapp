import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
    },
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
        },
        signout: (state) => {
            state.currentUser = null;
        },
    }
});

export const { login, signout } = userSlice.actions;
export default userSlice.reducer;
