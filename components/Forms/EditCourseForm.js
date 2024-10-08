import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import FormInput from "./FormComponents/FormInput";
import Card from "../Card";
import Header2 from "../Headers/DefaultHeaders/Header2";
import COLORS from "../../constants/Colors/COLORS";
import SubmissionButton from "./FormComponents/SubmissionButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editCourse } from "../../store/slices/courses";
import { useNavigation } from "@react-navigation/native";
import InvalidInputText from "./FormComponents/InvalidInputText";
import BannerFormInput from "./FormComponents/BannerFormInput/BannerFormInput";
import { useEffect } from "react";

function EditCourseForm({ id, initName, initDescription, initBanner }) {
  const navigation = useNavigation();
  //for the value that is used to make the new class
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [banner, setBanner] = useState();

  //for the value of the input
  const [inputName, setInputName] = useState();
  const [inputDescription, setInputDescription] = useState();

  //used to set InvalidInputText to visable and check if inputs valid
  const [validName, setValidName] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    setName(initName);
    setDescription(initDescription);
    setBanner(initBanner);

    setInputName(initName);
    setInputDescription(initDescription);
  }, [initName, initDescription, initBanner]);

  function editCourseHandle() {
    if (name) {
      dispatch(
        editCourse({
          id: id,
          params: {
            id: id,
            name: name,
            description: description,
            banner: banner,
          },
        })
      );
      navigation.navigate("CourseScreen", { id });
    } else {
      setValidName(false);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Card justifyContent="center" shadowOpacity={0.75}>
          <View style={styles.headerContainer}>
            <Header2>Edit {initName}</Header2>
          </View>
          {!validName && (
            <InvalidInputText>Course name required</InvalidInputText>
          )}
          <FormInput
            placeholder="Course Name"
            title="COURSE NAME"
            value={inputName}
            setValue={setInputName}
            setHandle={setName}
            setValid={setValidName}
          />

          <FormInput
            placeholder="Description (room, teacher, etc)"
            title="DESCRIPTION"
            setValue={setInputDescription}
            value={inputDescription}
            setHandle={setDescription}
          />

          <BannerFormInput
            title="BANNER"
            setInputBanner={setBanner}
            initBanner={initBanner}
          />
          <SubmissionButton
            submitHandle={editCourseHandle}
            title="CONFIRM EDIT"
          />
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

export default EditCourseForm;
