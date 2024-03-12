import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

var displayed = 0;
var canLoop = true;

function InfoContainer({ average, deadlines }) {
  useEffect(() => {
    displayed = 0;
    canLoop = true;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.dueDateContainer}>
        {deadlines.length != 0 ? (
          deadlines.map(
            (deadline) => canLoop && displayDueDate(deadline, deadlines.length)
          )
        ) : (
          <Text style={styles.extraText}>Nothing due soon :)</Text>
        )}
      </View>
      <View style={styles.averageContainer}>
        <Text>{average}%</Text>
      </View>
    </View>
  );
}
function displayDueDate(deadline, amount) {
  const diffTime = Math.abs(deadline.dueDate - new Date().setHours(0, 0, 0, 0));
  var dueDate = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (dueDate < 7) {
    if (displayed < 2) {
      if (dueDate == 0) {
        dueDate = `due today`;
      } else if (dueDate == 1) {
        dueDate = `due tomorrow`;
      } else {
        dueDate = `due in ${dueDate} days`;
      }
      displayed++;
      return (
        <Text style={styles.dueDateText}>
          <Text style={styles.highlightedText}>{deadline.title} </Text>
          {dueDate}
        </Text>
      );
    } else {
      canLoop = false;
      return (
        <Text style={styles.extraText}>+{amount - displayed} more...</Text>
      );
    }
  }
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
