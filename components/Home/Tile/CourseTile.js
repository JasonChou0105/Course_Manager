import { Pressable, StyleSheet, View } from "react-native";
import TileHeader from "./TileHeader";
import InfoContainer from "./InfoContainer";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../../constants/Colors/COLORS";

function CourseTile({ Data }) {
  const navigation = useNavigation();
  function pressHandle() {
    navigation.navigate("CourseScreen", {
      id: Data.id,
    });
  }
  return (
    <View style={styles.boxShadow}>
      <Pressable style={styles.container} onPress={pressHandle}>
        <TileHeader banner={Data.banner}>{Data.name}</TileHeader>
        <InfoContainer average={Data.average} homework={Data.homework} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.border,
    elevation: 4,
    overflow: "hidden",
    backgroundColor: "#ffffffff",
  },
  boxShadow: {
    margin: 12,
    height: 200,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  infoContainer: {
    margin: 8,
  },
});

export default CourseTile;
