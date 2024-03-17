import { View, Text, StyleSheet } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";
import Course from "../models/Course";
import ScreenHeader from "../components/Headers/ScreenHeader";
import Header2 from "../components/Headers/Header2";
import Test from "../models/Test";
import Deadline from "../models/Deadline";

//name, description, banner, average, tests/assignments (new object array), deadlines (new object array)
//title, mark, weight, id
//title, dueDate, id

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader>Home</ScreenHeader>
      <Header2 margin={20}>Your Courses: </Header2>
      <CoursesDisplay
        courses={[
          new Course(
            "Math",
            "idk what to put here but its here now",
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
          new Course("Science", " ", "science", "73.9", [], []),
          new Course("Tech", " ", "tech", "92", [], []),
          new Course("Geography", " ", "Geography", "84.2", [], []),
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
