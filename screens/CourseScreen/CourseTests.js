import React from "react";
import { View, Text } from "react-native";

function CourseTests({ route }) {
  const id = route.params.id;

  const { name, banner, description, average, assignments, homework, tests } =
    getCourse(id);
  return (
    <View>
      <Text>{name}'s Test Page</Text>
    </View>
  );
}

export default CourseTests;
