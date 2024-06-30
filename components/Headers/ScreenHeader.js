import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../constants/Colors/COLORS";
import { SafeAreaView } from "react-native-safe-area-context";
import BoxShadowIos from "../Backgrounds/BoxShadowIos";

function ScreenHeader({ children, ExtraComponent }) {
  const navigation = useNavigation();

  function toggleDrawer() {
    navigation.openDrawer();
  }

  return (
    <BoxShadowIos>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Pressable onPress={toggleDrawer}>
            <Ionicons name="menu-outline" size={24} color="black" />
          </Pressable>
          <Text style={styles.title}>{children}</Text>
        </View>
        <View style={styles.innerContainer}>
          {ExtraComponent && <ExtraComponent />}
          <View style={styles.profileContainer}>
            <Text style={styles.profileText}>J</Text>
          </View>
        </View>
      </SafeAreaView>
    </BoxShadowIos>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#ffffff",
    elevation: 10,
    marginBottom: 4,
    maxHeight: 105,
    padding: 8,
    paddingTop: 0,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
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
