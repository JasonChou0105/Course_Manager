import { StyleSheet, View } from "react-native";
import BoxShadowIos from "../Backgrounds/BoxShadowIos";

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
    borderColor: "#838383b6",
    backgroundColor: "#ffffff",
    elevation: 2,
  },
});

export default CourseCard;
