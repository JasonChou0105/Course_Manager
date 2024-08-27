import { View, StyleSheet } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";
import ScreenHeader from "../components/Headers/ScreenHeader";
import AddCourseButton from "../components/Home/AddCourseButton";
import { useSelector } from "react-redux";

//name, description, banner, average, tests/assignments (new object array), deadlines (new object array)
//title, mark, weight, id
//title, dueDate, id

function HomeScreen() {
  const courses = useSelector((state) => state.courses.courses);
  return (
    <View style={styles.container}>
      <ScreenHeader ExtraComponent={AddCourseButton}>Home</ScreenHeader>
      <CoursesDisplay courses={courses} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
