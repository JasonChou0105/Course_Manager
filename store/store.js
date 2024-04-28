import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/courses";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
