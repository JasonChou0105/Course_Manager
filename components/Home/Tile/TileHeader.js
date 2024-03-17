import { ImageBackground, StyleSheet, Text, View } from "react-native";

function CourseHeader({ children }) {
  return (
    <ImageBackground
      source={require(`../../../assets/banners/math.png`)}
      style={styles.container}
    >
      <Text style={styles.title}>{children}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0040a1",
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default CourseHeader;
