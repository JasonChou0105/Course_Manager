import { FlatList, View, StyleSheet } from "react-native";
import CourseTile from "./CourseTile";

function CoursesDisplay({ courses }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={(itemData) => DisplayTile(itemData.item)}
        numColumns={2}
      />
    </View>
  );
}

function DisplayTile(item) {
  return <CourseTile Data={item} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default CoursesDisplay;
