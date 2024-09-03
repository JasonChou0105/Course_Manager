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
        tests: [
          new Test({
            name: "Exponents",
            testDate: new Date(2024, 3, 5).toDateString(),
            id: 0,
          }),
        ],
        homework: [
          new Homework({
            name: "random ass graph",
            dueDate: new Date(2024, 7, 30).toDateString(),
            id: 0,
          }),
          new Homework({
            name: "2.3",
            dueDate: new Date(2024, 7, 30).toDateString(),
            id: 1,
          }),
          new Homework({
            name: "im hungry",
            dueDate: new Date(2024, 7, 31).toDateString(),
            id: 2,
          }),
          new Homework({
            name: "AHHHHHHHHHHHHHHH",
            dueDate: new Date(2024, 7, 31).toDateString(),
            id: 3,
          }),
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
