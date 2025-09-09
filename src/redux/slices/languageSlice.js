import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  languages: [],
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {},

  // asenkron thunk aksiyonun pending,rejected,fulfilled anlarında
  // state'in nasıl güncelleniceğini extraReducer ile belirleyebiliyoruz
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getLanguages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.languages = action.payload;
    });
  },
});

export default languageSlice.reducer;
