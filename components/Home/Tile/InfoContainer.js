import { StyleSheet, Text, View } from "react-native";
import UpcomingDueDates from "./UpcomingDueDates";

function InfoContainer({ average, homework }) {
  return (
    <View style={styles.container}>
      <UpcomingDueDates homework={homework} />
      <View style={styles.averageContainer}>
        <Text>{average}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  averageContainer: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#b5b4b4",
    alignItems: "flex-end",
  },
  dueDateContainer: {
    marginBottom: 8,
  },
  highlightedText: {
    fontStyle: "italic",
  },
});

export default InfoContainer;
