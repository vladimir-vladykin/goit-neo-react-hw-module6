import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    setNameFilter(state, action) {},
  },
});

export const { setNameFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
