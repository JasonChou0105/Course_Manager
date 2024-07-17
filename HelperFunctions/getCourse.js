import { useSelector } from "react-redux";

function getCourse(id) {
  const courses = useSelector((state) => state.courses.courses);
  let course;
  for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
    if (i == id) {
      course = courses[i];
    }
  }
  if (course) {
    return course;
  } else {
    console.error("found no match to the id: " + id);
    return null;
  }
}

export default getCourse;
