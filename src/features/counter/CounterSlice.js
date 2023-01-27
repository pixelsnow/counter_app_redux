import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1000,
  },
  reducers: {
    // There shouldn't be anything in it aside from changing the state
    increment: (state) => {
      // Toolkit handles mutation issues
      state.value += 1;
    },
  },
});

// Exporting reducers
// Telling which reducer is tied to the action
export const { increment } = counterSlice.actions;
export const selectCounter = (state) => state.counter.value;

// This is future counterReducer
export default counterSlice.reducer;
