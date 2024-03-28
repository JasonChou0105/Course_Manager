import { StyleSheet, ScrollView } from "react-native";
import CourseTile from "./Tile/CourseTile";
import Header2 from "../Headers/Header2";

function CoursesDisplay({ courses }) {
  function DisplayTile(item) {
    return <CourseTile Data={item} />;
  }
  return (
    <ScrollView style={styles.container}>
      <Header2 margin={20}>Your Courses: </Header2>

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
