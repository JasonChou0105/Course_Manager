import { createSlice } from "@reduxjs/toolkit";
import Course from "../../models/Course";
import Assignment from "../../models/deadlines/Assignment";
import Test from "../../models/deadlines/Test";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      new Course({
        name: "Math",
        description: "idk what to put here but its here now",
        banner: "blue",
        average: "91.4",
        tests: [new Test("Exponents", new Date(2024, 3, 5).toDateString())],
        homework: [
          new Assignment("2.3", new Date(2024, 5, 5).toDateString()),
          new Assignment("2.1", new Date(2024, 5, 5).toDateString()),
          new Assignment("2.2", new Date(2024, 5, 7).toDateString()),
          new Assignment("2.3", new Date(2024, 5, 8).toDateString()),
        ],
      }).toJSON(),
      new Course({
        name: "Science",
        banner: "orange",
        average: "73.9",
        homework: [
          new Assignment("2.4", new Date(2024, 2, 20).toDateString()),
          new Assignment("2.5", new Date(2024, 2, 21).toDateString()),
        ],
      }).toJSON(),
      new Course({ name: "Tech", banner: "purple", average: "92" }).toJSON(),
      new Course({
        name: "Geography",
        banner: "purple",
        average: "84.2",
      }).toJSON(),
    ],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(
        new Course({
          average: "wefwefwef.4",
          banner: "wefwef",
          description: "wefwefwf",
          name: "wef",
        }).toJSON()
      );
    },
  },
});

export const addCourse = coursesSlice.actions.addCourse;
export default coursesSlice.reducer;
