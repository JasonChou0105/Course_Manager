import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import FormInput from "../components/AddCourse/FormInput";
import AddCourseForm from "../components/AddCourse/AddCourseForm";
import { SafeAreaView } from "react-native-safe-area-context";

function AddCourseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader>Add Course</ScreenHeader>
      <AddCourseForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default AddCourseScreen;
