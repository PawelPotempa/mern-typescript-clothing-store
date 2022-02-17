import { createSlice } from "@reduxjs/toolkit";

export const genderSlice = createSlice({
  name: "gender",
  initialState: {
    gender: "",
  },
  reducers: {
    genderHer: (state) => {
      state.gender = "her";
    },
    genderHim: (state) => {
      state.gender = "him";
    },
  },
});

// Action creators are generated for each case reducer function
export const { genderHer, genderHim } = genderSlice.actions;

export default genderSlice.reducer;
