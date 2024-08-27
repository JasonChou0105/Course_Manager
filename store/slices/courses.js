import { createSlice } from "@reduxjs/toolkit";
import Course from "../../models/Course";
import Assignment from "../../models/deadlines/Assignment";
import Homework from "../../models/deadlines/Homework";
import Test from "../../models/deadlines/Test";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      new Course({
        id: 0,
        name: "Math",
        description: "idk what to put here but its here now",
        banner: "blue",
        average: "91.4",
        tests: [new Test("Exponents", new Date(2024, 3, 5).toDateString())],
        homework: [
          new Homework(
            "random ass graph",
            new Date(2024, 7, 30).toDateString()
          ),
          new Homework("2.3", new Date(2024, 7, 30).toDateString()),
          new Homework("im hungry", new Date(2024, 7, 31).toDateString()),
          new Homework(
            "AHHHHHHHHHHHHHHH",
            new Date(2024, 7, 31).toDateString()
          ),
        ],
      }).toJSON(),
      new Course({
        id: 1,
        name: "Science",
        banner: "orange",
        average: "73.9",
        homework: [],
      }).toJSON(),
      new Course({
        id: 2,
        name: "Tech",
        banner: "purple",
        average: "92",
      }).toJSON(),
      new Course({
        id: 3,
        name: "Geography",
        banner: "purple",
        average: "84.2",
      }).toJSON(),
    ],
  },
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(new Course(action.payload).toJSON());
    },
    editCourse: (state, action) => {
      state.courses = state.courses.map((item) => {
        if (item.id === action.payload.id) {
          return new Course(action.payload.params).toJSON();
        }
        return item;
      });
    },
    // removeExpanse: (state, action) => {
    //   state.expanses.splice(state.expanses.indexOf(action.payload.id), 1);
    // },
  },
});

export const addCourse = coursesSlice.actions.addCourse;
export const editCourse = coursesSlice.actions.editCourse;
export default coursesSlice.reducer;
