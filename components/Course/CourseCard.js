import { StyleSheet, View } from "react-native";

function CourseCard({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginBottom: 4,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#838383b6",
    backgroundColor: "#ffffff",
    elevation: 2,
  },
});

export default CourseCard;
