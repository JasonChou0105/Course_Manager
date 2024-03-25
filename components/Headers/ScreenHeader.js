import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ScreenHeader({ children, AddCourseComp }) {
  const navigation = useNavigation();

  function toggleDrawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer1}>
        <Pressable onPress={toggleDrawer}>
          <Ionicons name="menu-outline" size={24} color="black" />
        </Pressable>
        <Text style={styles.title}>{children}</Text>
      </View>
      <View style={styles.innerContainer2}>
        {AddCourseComp && <AddCourseComp />}
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>J</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
    padding: 8,
    marginTop: 24,
    borderBottomWidth: 1,
  },
  innerContainer1: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    borderRadius: 124,
    width: 40,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "#005ebc",
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  addText: {
    fontSize: 35,
    fontWeight: "300",
    textAlign: "center",
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    marginLeft: 8,
  },
});

export default ScreenHeader;
