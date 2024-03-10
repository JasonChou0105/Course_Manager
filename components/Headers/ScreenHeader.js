import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ScreenHeader({ children }) {
  return (
    <View style={styles.container}>
      <Ionicons name="menu-outline" size={24} color="black" />
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
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    marginLeft: 8,
  },
});

export default ScreenHeader;
