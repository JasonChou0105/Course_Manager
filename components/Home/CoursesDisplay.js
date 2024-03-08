import { FlatList, View } from "react-native";
import CourseTile from "./CourseTile";

function CoursesDisplay({ courses }) {
  return (
    <View>
      <Text>hiwefwef</Text>
      <FlatList
        data={courses}
        renderItem={(itemData) => DisplayTile(itemData.item)}
      />
    </View>
  );
}

function DisplayTile(item) {
  return <CourseTile Data={item} />;
}

export default CoursesDisplay;
