import { configureStore } from "@reduxjs/toolkit";
import chaptersReducer from "./features/chaptersSlice";

export const store = configureStore({
  reducer: {
    chapters: chaptersReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;