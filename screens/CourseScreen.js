import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import CourseHeader from "../components/Course/Header/CourseHeader";
import Upcoming from "../components/Course/Upcoming/Upcoming";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

//name, description, average, view homework and assignments, upcoming

function CourseScreen({ route }) {
  const { name, description, average, deadlines } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <ScreenHeader>{name}</ScreenHeader>
        <CourseHeader name={name} description={description} average={average} />
        <Upcoming deadlines={deadlines} />
        <Upcoming deadlines={deadlines} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default CourseScreen;
