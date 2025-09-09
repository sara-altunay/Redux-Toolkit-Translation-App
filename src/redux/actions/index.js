import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// asenkron aksiyon
export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    // api isteği at
    const res = await api.get("/languages");

    // askiyonun payload'u olucak değeri return et
    return res.data.languages;
  }
);

// asenkron aksiyon
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (_, { getState }) => {
    // getState: aksiyon içerisinden storedaki verilere erişim sağlar
    const { translate } = getState();

    // api isteği at
    const res = await api.post("", {
      q: translate.textToTranslate,
      source: translate.sourceLang.value ?? "auto",
      target: translate.targetLang.value,
    });

    // aksiyonun payload'u olacak değeri return et
    return res.data?.data?.translations?.translatedText;
  }
);
