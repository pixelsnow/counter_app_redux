import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1000,
  },
  reducers: {
    // There shouldn't be anything in it aside from changing the state
    incByAmount: (state, action) => {
      // Toolkit handles mutation issues
      state.value += action.payload;
    },
    resetInitial: (state) => {
      state.value = 1000;
    },
  },
});

// Exporting reducers
// Telling which reducer is tied to the action
export const { incByAmount, resetInitial } = counterSlice.actions; // connecting with actions - needed for events
// state.counter here refers to reducers object in Store
export const selectCounter = (state) => state.counter.value; // for showing the value

// This is future counterReducer
export default counterSlice.reducer; // for store
