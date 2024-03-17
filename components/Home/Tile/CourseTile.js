import { Pressable, StyleSheet } from "react-native";
import CourseHeader from "./TileHeader";
import InfoContainer from "./InfoContainer";
import { useNavigation } from "@react-navigation/native";

function CourseTile({ Data }) {
  const navigation = useNavigation();
  function pressHandle() {
    navigation.navigate("CourseScreen", {
      name: Data.name,
      description: Data.description,
      average: Data.average,
    });
  }
  return (
    <Pressable style={styles.container} onPress={pressHandle}>
      <CourseHeader>{Data.name}</CourseHeader>
      <InfoContainer average={Data.average} deadlines={Data.deadlines} />
    </Pressable>
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
    height: 200,
  },
  infoContainer: {
    margin: 8,
  },
});

export default CourseTile;
