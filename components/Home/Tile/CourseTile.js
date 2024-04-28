import { Pressable, StyleSheet } from "react-native";
import TileHeader from "./TileHeader";
import InfoContainer from "./InfoContainer";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../../constants/Colors/COLORS";

function CourseTile({ Data }) {
  const navigation = useNavigation();
  function pressHandle() {
    navigation.navigate("CourseScreen", {
      name: Data.name,
      banner: Data.banner,
      description: Data.description,
      average: Data.average,
      assignments: Data.assignments,
      homework: Data.homework,
      tests: Data.tests,
    });
  }
  return (
    <Pressable style={styles.container} onPress={pressHandle}>
      <TileHeader banner={Data.banner}>{Data.name}</TileHeader>
      <InfoContainer average={Data.average} homework={Data.homework} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.border,
    overflow: "hidden",
    height: 200,
  },
  infoContainer: {
    margin: 8,
  },
});

export default CourseTile;
