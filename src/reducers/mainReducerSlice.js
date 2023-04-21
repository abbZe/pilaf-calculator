import { createSlice } from "@reduxjs/toolkit";

const mainReducerSlice = createSlice({
  name: "store",
  // BLOCKS OF DATA
  initialState: {
    cups: 0,
    ml: 0,
    cupMlVolume: 250,
  },
  // REDUCERS + ACTIONS
  reducers: {
    gramToWaterCupsAndMl: (state, action = 0) => {
      state.ml = (action.payload / 1.25).toFixed();
      state.cups = (action.payload / state.cupMlVolume / 1.25).toFixed(1);
    },
    cupsToWaterCupsAndMl: (state, action = 0) => {
      state.ml = ((action.payload * state.cupMlVolume) / 1.25).toFixed();
      state.cups = (action.payload / 1.25).toFixed(1);
    },
    updateCupVolume: (state, action = 250) => {
      state.cupMlVolume = action.payload;
    },
  },
});

// EXPORT ACTIONS
export const { gramToWaterCupsAndMl, cupsToWaterCupsAndMl, updateCupVolume } =
  mainReducerSlice.actions;

// EXPORT GETTERS
export const selectCups = (state) => state.mainReducer.cups;
export const selectGrams = (state) => state.mainReducer.ml;
export const selectCupVolume = (state) => state.mainReducer.cupMlVolume;

// EXPORT SLICE
export default mainReducerSlice.reducer;
