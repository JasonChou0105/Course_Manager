import { StyleSheet, View } from "react-native";
import BoxShadowIos from "../Backgrounds/BoxShadowIos";
import COLORS from "../../constants/Colors/COLORS";

function CourseCard({ children }) {
  return (
    <BoxShadowIos>
      <View style={styles.container}>{children}</View>
    </BoxShadowIos>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#ffffff",
    elevation: 1.5,
  },
});

export default CourseCard;
