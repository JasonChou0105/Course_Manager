import { View, Text, StyleSheet } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";
import Course from "../models/Course";
import ScreenHeader from "../components/Headers/ScreenHeader";
import Header from "../components/Headers/Header";
import Test from "../models/Test";
import Deadline from "../models/Deadline";
//name, banner, average, tests/assignments (new object array), deadlines (new object array)
//title, mark, weight, id
//title, dueDate, id

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader>Home</ScreenHeader>
      <Header>Your Courses: </Header>
      <CoursesDisplay
        courses={[
          new Course(
            "Math",
            "math",
            "91.4",
            [],
            [
              new Deadline("2.1", new Date(2024, 2, 10)),
              new Deadline("2.2", new Date(2024, 2, 11)),
              new Deadline("2.3", new Date(2024, 2, 11)),
              new Deadline("2.4", new Date(2024, 2, 11)),
              new Deadline("2.5", new Date(2024, 2, 11)),
            ]
          ),
          new Course("Science", "science", "73.9", [], []),
          new Course("Tech", "tech", "92", [], []),
          new Course("Geography", "Geography", "84.2", [], []),
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
