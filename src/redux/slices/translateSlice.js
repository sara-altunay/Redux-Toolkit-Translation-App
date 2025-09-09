import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  sourceLang: { value: undefined, label: "Detect Language" },
  targetLang: { value: "en", label: "English" },
  textToTranslate: "",
  translatedText: "",
  translationHistory: [],
};
const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setSource: (state, { payload }) => {
      state.sourceLang = payload;
    },
    setTarget: (state, { payload }) => {
      state.targetLang = payload;
    },
    setText: (state, { payload }) => {
      state.textToTranslate = payload;
    },
    clearText: (state) => {
      state.textToTranslate = "";
      state.translatedText = "";
    },
    addToHistory: (state, { payload }) => {
      // Add to history and keep only last 10 items
      state.translationHistory.push(payload);
      if (state.translationHistory.length > 10) {
        state.translationHistory = state.translationHistory.slice(-10);
      }
    },
    clearHistory: (state) => {
      state.translationHistory = [];
    },
    swap: (state) => {
      const currentsource = state.sourceLang;
      const currentTarget = state.targetLang;
      const currentText = state.textToTranslate;
      const currentTranslated = state.translatedText;
      
      state.sourceLang = currentTarget;
      state.targetLang = currentsource;
      state.textToTranslate = currentTranslated;
      state.translatedText = currentText;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(translateText.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.translatedText = "";
      })
      .addCase(translateText.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.translatedText = payload || "";
      })
      .addCase(translateText.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Translation failed";
      });
  },
});
export const { setSource, setTarget, setText, clearText, addToHistory, clearHistory, swap } = translateSlice.actions;
export default translateSlice.reducer;
