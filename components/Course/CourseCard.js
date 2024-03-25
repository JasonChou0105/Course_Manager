import { StyleSheet, View } from "react-native";

function CourseCard({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    margin: 42,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#ffffff",
    elevation: 2,
  },
});

export default CourseCard;
