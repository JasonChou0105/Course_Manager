import { StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../components/Headers/ScreenHeader";
import CourseHeader from "../components/Course/Header/CourseHeader";
import Upcoming from "../components/Course/Upcoming/Upcoming";
import { ScrollView } from "react-native-gesture-handler";

//name, description, average, view homework and assignments, upcoming

function CourseScreen({ route }) {
  const { name, banner, description, average, assignments } = route.params;
  return (
    <View style={styles.container}>
      <ScreenHeader>{name}</ScreenHeader>
      <ScrollView>
        <CourseHeader
          name={name}
          description={description}
          average={average}
          banner={banner}
        />
        <Upcoming assignments={assignments} />
        <Upcoming assignments={assignments} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: "#ffffff",
  },
});

export default CourseScreen;
