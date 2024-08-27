import { StyleSheet, Text, View } from "react-native";
import { Header1 } from "../../Headers/DefaultHeaders/Headers";
import COLORS from "../../../constants/Colors/COLORS";

function AverageContainer({ children }) {
  return (
    <View style={styles.container}>
      <Header1 color={COLORS.textColor}>{children}%</Header1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    marginRight: 16,
    height: 100,
    aspectRatio: 1,
    backgroundColor: "#ffffff",
  },
});

export default AverageContainer;
