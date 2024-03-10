import { StyleSheet, Text, View } from "react-native";

function InfoContainer({ average, deadlines }) {
  return (
    <View style={styles.container}>
      <View style={styles.averageContainer}>
        <Text>{average}%</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  averageContainer: {
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#b5b4b4",
    alignItems: "flex-end",
  },
});

export default InfoContainer;
