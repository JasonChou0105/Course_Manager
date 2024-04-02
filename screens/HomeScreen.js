import { View, Text, StyleSheet } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";
import Course from "../models/Course";
import ScreenHeader from "../components/Headers/ScreenHeader";
import Test from "../models/Test";
import Deadline from "../models/Deadline";
import AddCourseButton from "../components/Home/AddCourseButton";

//name, description, banner, average, tests/assignments (new object array), deadlines (new object array)
//title, mark, weight, id
//title, dueDate, id

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader AddCourseComp={AddCourseButton}>Home</ScreenHeader>
      <CoursesDisplay
        courses={[
          new Course(
            "Math",
            "idk what to put here but its here now",
            "blue",
            "91.4",
            [],
            [
              new Deadline("2.1", new Date(2024, 3, 3)),
              new Deadline("2.2", new Date(2024, 3, 4)),
              new Deadline("2.3", new Date(2024, 3, 5)),
              new Deadline("2.1", new Date(2024, 3, 5)),
              new Deadline("2.2", new Date(2024, 3, 7)),
              new Deadline("2.3", new Date(2024, 3, 8)),
            ]
          ),
          new Course(
            "Science",
            " ",
            "orange",
            "73.9",
            [],
            [
              new Deadline("2.4", new Date(2024, 2, 20)),
              new Deadline("2.5", new Date(2024, 2, 21)),
            ]
          ),
          new Course("Tech", " ", "purple", "92", [], []),
          new Course("Geography", " ", "Geography", "84.2", [], []),
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default HomeScreen;
