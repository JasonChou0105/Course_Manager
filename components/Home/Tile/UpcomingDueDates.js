import React from "react";
import getUpcomingDueDates from "../../../HelperFunctions/DueDates/getUpcomingDueDates";
import displayDueDates from "../../../HelperFunctions/DueDates/displayDueDate";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../../constants/Colors/COLORS";

function UpcomingDueDates({ homework }) {
  var [upcoming, additional] = getUpcomingDueDates(homework, 3);

  return (
    <View style={styles.dueDateContainer}>
      {upcoming.length > 0 ? (
        upcoming.map((deadline) => displayDueDateLocal(deadline))
      ) : (
        <Text style={styles.extraText}>Nothing due soon :)</Text>
      )}
      {additional > 0 && (
        <Text style={styles.extraText}>+{additional} more this week...</Text>
      )}
    </View>
  );
}
function displayDueDateLocal(deadline) {
  return (
    <Text style={styles.dueDateText}>
      {deadline.name} due
      <Text style={styles.timeUntilDueText}>
        {" "}
        {displayDueDates(new Date(deadline.dueDate))}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  dueDateContainer: {
    marginBottom: 8,
  },
  dueDateText: {
    fontSize: 12,
  },
  timeUntilDueText: {
    fontSize: 12,
    color: COLORS.highlight,
    fontWeight: "500",
  },
  extraText: {
    fontStyle: "italic",
    fontSize: 11,
    color: "#5a5a5a",
  },
});

export default UpcomingDueDates;
