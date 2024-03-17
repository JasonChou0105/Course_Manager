import { FlatList, View, StyleSheet } from "react-native";
import CourseTile from "./Tile/CourseTile";

function CoursesDisplay({ courses }) {
  function DisplayTile(item) {
    return <CourseTile Data={item} />;
  }
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default CoursesDisplay;
