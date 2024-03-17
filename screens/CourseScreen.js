import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import CourseHeader from "../components/Course/Header/CourseHeader";

//name, description, average, view homework and assignments, upcoming

function CourseScreen({ route }) {
  const { name, description, average } = route.params;
  return (
    <View>
      <ScreenHeader>{name}</ScreenHeader>
      <CourseHeader name={name} description={description} average={average} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CourseScreen;
