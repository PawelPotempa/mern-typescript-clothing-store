import { createSlice } from "@reduxjs/toolkit";

export const sidebarModalSlice = createSlice({
  name: "sidebarModal",
  initialState: {
    toggle: false,
  },
  reducers: {
    openModal: (state) => {
      state.toggle = true;
    },
    closeModal: (state) => {
      state.toggle = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = sidebarModalSlice.actions;

export default sidebarModalSlice.reducer;
