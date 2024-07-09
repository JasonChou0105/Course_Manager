import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import EditCourseForm from "../components/Forms/EditCourseForm";
import { useState } from "react";

function EditCourseScreen({ route }) {
  const { name, description, banner } = route.params;
  const [courseName] = useState(name);
  const [courseDescription] = useState(description);
  const [courseBanner] = useState(banner);
  console.log(name, description, banner);
  return (
    <View style={styles.container}>
      <ScreenHeader>Edit {courseName}</ScreenHeader>
      <EditCourseForm
        initName={courseName}
        initDescription={courseDescription}
        initBanner={courseBanner}
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

export default EditCourseScreen;
