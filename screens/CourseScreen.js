import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import CourseHeader from "../components/Course/Header/CourseHeader";
import Upcoming from "../components/Course/Upcoming/Upcoming";
import { ScrollView } from "react-native-gesture-handler";
import EditCourseButton from "../components/Course/EditCourseButton";

//name, description, average, view homework and assignments, upcoming

function CourseScreen({ route }) {
  const {
    id,
    name,
    banner,
    description,
    average,
    assignments,
    homework,
    tests,
  } = route.params;
  return (
    <View style={styles.container}>
      <ScreenHeader
        ExtraComponent={EditCourseButton.bind(this, {
          courseId: id,
          courseName: name,
          courseDescription: description,
          courseBanner: banner,
        })}
      >
        {name}
      </ScreenHeader>
      <ScrollView>
        <CourseHeader
          name={name}
          description={description}
          average={average}
          banner={banner}
        />
        <Upcoming data={homework} template="due" title="Upcoming Homework" />
        <Upcoming data={tests} title="Upcoming Tests" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: "#ffffff",
  },
});

export default CourseScreen;
