import { createSlice } from "@reduxjs/toolkit";
import Course from "../../models/Course";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(new Course(action.payload.params).toJSON());
    },
  },
});
