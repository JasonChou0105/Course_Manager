import { StyleSheet, Text, View } from "react-native";
import getUpcomingDueDates from "../../../HelperFunctions/DueDates/getUpcomingDueDates";
import displayDueDate from "../../../HelperFunctions/DueDates/displayDueDate";

function InfoContainer({ average, deadlines }) {
  var [upcoming, additional] = getUpcomingDueDates(deadlines, 2);
  return (
    <View style={styles.container}>
      <View style={styles.dueDateContainer}>
        {upcoming.length != 0 ? (
          upcoming.map((deadline) => displayDueDateLocal(deadline))
        ) : (
          <Text style={styles.extraText}>Nothing due soon :)</Text>
        )}
        {additional != 0 && (
          <Text style={styles.extraText}>+{additional} more this week...</Text>
        )}
      </View>
      <View style={styles.averageContainer}>
        <Text>{average}%</Text>
      </View>
    </View>
  );
}

function displayDueDateLocal(deadline) {
  return (
    <Text style={styles.dueDateText}>
      <Text>{deadline.name} </Text>
      {displayDueDate(deadline.dueDate)}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  averageContainer: {
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#b5b4b4",
    alignItems: "flex-end",
  },
  dueDateText: {
    fontSize: 12,
  },
  dueDateContainer: {
    marginBottom: 8,
  },

  extraText: {
    fontStyle: "italic",
    fontSize: 11,
    color: "#5a5a5a",
  },
  highlightedText: {
    fontStyle: "italic",
  },
});

export default InfoContainer;
