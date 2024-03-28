import { View, Text, StyleSheet } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";
import Course from "../models/Course";
import ScreenHeader from "../components/Headers/ScreenHeader";
import Header2 from "../components/Headers/Header2";
import Test from "../models/Test";
import Deadline from "../models/Deadline";
import AddCourseButton from "../components/Home/AddCourseButton";
import { SafeAreaView } from "react-native-safe-area-context";

//name, description, banner, average, tests/assignments (new object array), deadlines (new object array)
//title, mark, weight, id
//title, dueDate, id

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader AddCourseComp={AddCourseButton}>Home</ScreenHeader>
      <CoursesDisplay
        courses={[
          new Course(
            "Math",
            "idk what to put here but its here now",
            "math",
            "91.4",
            [],
            [
              new Deadline("2.1", new Date(2024, 2, 19)),
              new Deadline("2.2", new Date(2024, 2, 20)),
              new Deadline("2.3", new Date(2024, 2, 23)),
              new Deadline("2.1", new Date(2024, 2, 19)),
              new Deadline("2.2", new Date(2024, 2, 20)),
              new Deadline("2.3", new Date(2024, 2, 23)),
            ]
          ),
          new Course(
            "Science",
            " ",
            "science",
            "73.9",
            [],
            [
              new Deadline("2.4", new Date(2024, 2, 20)),
              new Deadline("2.5", new Date(2024, 2, 21)),
            ]
          ),
          new Course("Tech", " ", "tech", "92", [], []),
          new Course("Geography", " ", "Geography", "84.2", [], []),
        ]}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default HomeScreen;
