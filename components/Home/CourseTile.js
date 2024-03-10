import { View, Text, StyleSheet } from "react-native";
import CourseHeader from "./CourseHeader";
import InfoContainer from "./InfoContainer";

function CourseTile({ Data }) {
  return (
    <View style={styles.container}>
      <CourseHeader>{Data.name}</CourseHeader>
      <InfoContainer average={Data.average} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#b5b4b4",
    overflow: "hidden",
  },
  infoContainer: {
    margin: 24,
  },
});

export default CourseTile;
