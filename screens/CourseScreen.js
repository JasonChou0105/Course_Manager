import { Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";

function CourseScreen({ route }) {
  const { name } = route.params;
  return (
    <View>
      <ScreenHeader>{name}</ScreenHeader>
      <Text>{name}</Text>
    </View>
  );
}

export default CourseScreen;
