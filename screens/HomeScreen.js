import { View, Text, StyleSheet } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";
import Course from "../models/Course";
import ScreenHeader from "../components/Headers/ScreenHeader";
import Test from "../models/deadlines/Test";
import Assignment from "../models/deadlines/Assignment";
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
          new Course({
            name: "Math",
            description: "idk what to put here but its here now",
            banner: "blue",
            average: "91.4",
            tests: [new Test("Exponents", new Date(2024, 3, 3))],
            assignments: [
              new Assignment("2.1", new Date(2024, 3, 3)),
              new Assignment("2.2", new Date(2024, 3, 4)),
              new Assignment("2.3", new Date(2024, 3, 5)),
              new Assignment("2.1", new Date(2024, 3, 5)),
              new Assignment("2.2", new Date(2024, 3, 7)),
              new Assignment("2.3", new Date(2024, 3, 8)),
            ],
          }),
          new Course({
            name: "Science",
            banner: "orange",
            average: "73.9",
            assignments: [
              new Assignment("2.4", new Date(2024, 2, 20)),
              new Assignment("2.5", new Date(2024, 2, 21)),
            ],
          }),
          new Course({ name: "Tech", banner: "purple", average: "92" }),
          new Course({ name: "Geography", banner: "purple", average: "84.2" }),
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
