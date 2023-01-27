import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
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
export const { increment } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
