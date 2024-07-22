import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const CustomThemeSlice = createSlice({
  name: "CustomThemeSlice",
  initialState,
  reducers: {
    setCustomTheme: (state, action) => {
      state.value = action.payload;
    },
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCustomTheme, toggleTheme } = CustomThemeSlice.actions;

export default CustomThemeSlice.reducer;
