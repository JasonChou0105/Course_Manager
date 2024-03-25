import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, StyleSheet } from "react-native";

function AddCourseButton() {
  const navigation = useNavigation();

  function addCourseHandle() {
    navigation.navigate("AddCourseScreen");
  }
  return (
    <Pressable onPress={addCourseHandle}>
      <Text style={styles.addText}>+</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  addText: {
    fontSize: 35,
    fontWeight: "300",
    textAlign: "center",
    marginRight: 16,
  },
});

export default AddCourseButton;
