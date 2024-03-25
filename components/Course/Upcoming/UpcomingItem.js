import { StyleSheet, Text, View } from "react-native";
import Header3 from "../../Headers/Header3";
import displayDueDate from "../../../HelperFunctions/DueDates/displayDueDate";

function UpcomingItem({ dueDate, name }) {
  return (
    <View style={styles.container}>
      <Header3>{name}</Header3>
      <View style={styles.dueDateContainer}>
        <Text style={styles.dueDateText}>{displayDueDate(dueDate)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    borderBottomWidth: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dueDateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dueDateText: {
    fontSize: 13,
  },
});

export default UpcomingItem;
