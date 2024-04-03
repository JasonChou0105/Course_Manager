import { StyleSheet, ScrollView } from "react-native";
import CourseTile from "./Tile/CourseTile";

function CoursesDisplay({ courses }) {
  console.log("wefwe", courses);
  function DisplayTile(item) {
    return <CourseTile Data={item} />;
  }
  return (
    <ScrollView style={styles.container}>
      {courses.map((itemData) => DisplayTile(itemData))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CoursesDisplay;
