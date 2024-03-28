import { ImageBackground, StyleSheet, Text, View } from "react-native";
import OrangeBanner from "../../../assets/banners/OrangeBanner";

function CourseHeader({ children }) {
  return (
    <View style={styles.container}>
      <OrangeBanner />
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0040a1",
    padding: 16,
    height: 80,
  },
  title: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default CourseHeader;
