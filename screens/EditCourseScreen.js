import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import EditCourseForm from "../components/Forms/EditCourseForm";
import { useEffect, useState } from "react";

function EditCourseScreen({ route }) {
  const { id, name, description, banner } = route.params;
  const [courseName, setCourseName] = useState(name);
  const [courseDescription, setCourseDescription] = useState(description);
  const [courseBanner, setCourseBanner] = useState(banner);
  useEffect(() => {
    setCourseName(name);
    setCourseDescription(description);
    setCourseBanner(banner);
  }, [name, description, banner]);
  return (
    <View style={styles.container}>
      <ScreenHeader>Edit {courseName}</ScreenHeader>
      <EditCourseForm
        id={id}
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
