import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ScreenHeader({ children, openMenu }) {
  const navigation = useNavigation();

  function toggleDrawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleDrawer}>
        <Ionicons name="menu-outline" size={24} color="black" />
      </Pressable>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    padding: 8,
    marginTop: 24,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    marginLeft: 8,
  },
});

export default ScreenHeader;
