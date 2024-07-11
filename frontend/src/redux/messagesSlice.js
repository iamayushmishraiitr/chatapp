import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [],
  },
  reducers: {
    addmessage: (state, action) => {
      if (!state.messages) {
        state.messages = [];
      }
      state.messages.push(action.payload);
    },
    setmessage: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { addmessage, setmessage } = messageSlice.actions;
export default messageSlice.reducer;
