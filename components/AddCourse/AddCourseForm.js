import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import FormInput from "./FormInput";

function AddCourseForm() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <FormInput placeholder="Course Name" title="Course Name" />
        <FormInput
          placeholder="Description (room, teacher, etc)"
          title="Description"
        />
        <FormInput placeholder="Banner" title="Banner" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    alignItems: "center",
  },
});

export default AddCourseForm;
