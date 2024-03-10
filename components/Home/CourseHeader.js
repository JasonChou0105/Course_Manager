import { StyleSheet, Text, View } from "react-native";

function CourseHeader({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
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
