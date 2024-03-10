import { View, Text, StyleSheet } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";
import Course from "../models/Course";
import ScreenHeader from "../components/Headers/ScreenHeader";
import Header from "../components/Headers/Header";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader>Home</ScreenHeader>
      <Header>Your Courses</Header>
      <CoursesDisplay
        courses={[
          new Course("Math", "math", "91.4"),
          new Course("Science", "science", "73.9"),
          new Course("Tech", "tech", "92"),
          new Course("Geography", "Geography", "84.2"),
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default HomeScreen;
