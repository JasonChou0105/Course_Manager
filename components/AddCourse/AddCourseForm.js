import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import FormInput from "./FormInput";
import Card from "../Backgrounds/Card";
import Header2 from "../Headers/DefaultHeaders/Header2";
import COLORS from "../../constants/Colors/COLORS";
import SubmissionButton from "./SubmissionButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse } from "../../store/slices/courses";

function AddCourseForm() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [banner, setBanner] = useState();
  const dispatch = useDispatch();

  function addCourseHandle() {
    dispatch(
      addCourse({ name: name, description: description, banner: banner })
    );
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Card justifyContent="center" alignItems="center" shadowOpacity={1}>
          <View style={styles.headerContainer}>
            <Header2>Add Course</Header2>
          </View>
          <FormInput
            placeholder="Course Name"
            title="COURSE NAME"
            setHandle={setName}
          />
          <FormInput
            placeholder="Description (room, teacher, etc)"
            title="DESCRIPTION"
            setHandle={setDescription}
          />
          <FormInput
            placeholder="Banner"
            title="BANNER"
            setHandle={setBanner}
          />
          <SubmissionButton submitHandle={addCourseHandle} />
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
  headerContainer: {
    padding: 8,
    marginBottom: 16,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
});

export default AddCourseForm;
