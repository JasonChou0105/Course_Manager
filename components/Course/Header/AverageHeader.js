import { StyleSheet, Text, View } from "react-native";
import Header1 from "../../Headers/Header1";

function AverageContainer({ children }) {
  return (
    <View style={styles.container}>
      <Header1>{children}%</Header1>
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
