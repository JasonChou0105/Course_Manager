import { View, Text } from "react-native";
import CoursesDisplay from "../components/Home/CoursesDisplay";

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
      <Text>Your Courses</Text>
      <CoursesDisplay courses={["efwef", "wefew"]} />
    </View>
  );
}

export default HomeScreen;
