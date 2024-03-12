import { Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";

function CourseScreen({ route }) {
  const { data } = route.params;

  return (
    <View>
      <ScreenHeader>{data.name}</ScreenHeader>
      <Text>{data.name}</Text>
    </View>
  );
}

export default CourseScreen;
