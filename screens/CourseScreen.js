import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import CourseHeader from "../components/Course/Header/CourseHeader";
import Upcoming from "../components/Course/Upcoming/Upcoming";
import { ScrollView } from "react-native-gesture-handler";

//name, description, average, view homework and assignments, upcoming

function CourseScreen({ route }) {
  const { name, description, average, deadlines } = route.params;
  return (
    <ScrollView style={styles.container}>
      <ScreenHeader>{name}</ScreenHeader>
      <CourseHeader name={name} description={description} average={average} />
      <Upcoming deadlines={deadlines} />
      <Upcoming deadlines={deadlines} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default CourseScreen;
