import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function EditCourseButton() {
  const navigation = useNavigation();

  function addCourseHandle() {
    navigation.navigate("EditCourseScreen");
  }
  return (
    <Pressable onPress={addCourseHandle}>
      <Octicons name="gear" size={28} style={styles.editIcon} color="black" />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  editIcon: {
    marginRight: 16,
  },
});

export default EditCourseButton;
