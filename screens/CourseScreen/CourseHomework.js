import React from "react";
import { StyleSheet, Text, View } from "react-native";
import getCourse from "../../HelperFunctions/getCourse";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import COLORS from "../../constants/Colors/COLORS";

function CourseHomework({ route }) {
  const id = route.params.id;

  const { name, banner, description, average, assignments, homework, tests } =
    getCourse(id);
  return (
    <View>
      <ScreenHeader>{name}</ScreenHeader>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryHeaderText}>Geometry</Text>
        </View>
        <View style={styles.homeworkContainer}>
          <View></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryHeaderText: {
    fontSize: 24,
    color: COLORS.textColor,
  },
  categoryHeader: {
    width: "90%",
    padding: 8,
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
  },
  categoryContainer: {
    width: "100%",
    padding: 16,
  },
  homeworkContainer: {},
});

export default CourseHomework;
