import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import CourseHeader from "../../components/Course/Header/CourseHeader";
import Upcoming from "../../components/Course/Upcoming/Upcoming";
import { ScrollView } from "react-native-gesture-handler";
import EditCourseButton from "../../components/Course/EditCourseButton";
import getCourse from "../../HelperFunctions/getCourse";

//name, description, average, view homework and assignments, upcoming

function CourseOverview({ route }) {
  const id = route.params.id;

  const { name, banner, description, average, assignments, homework, tests } =
    getCourse(id);
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
        <Upcoming data={homework} title="Upcoming Homework" />
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

export default CourseOverview;
