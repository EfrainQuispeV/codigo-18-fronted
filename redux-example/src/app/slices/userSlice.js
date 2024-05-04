import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Efrain",
    lastName: "Quispe",
  },
});

export const userReducer = userSlice.reducer;