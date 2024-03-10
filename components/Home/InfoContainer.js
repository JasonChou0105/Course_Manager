import { StyleSheet, Text, View } from "react-native";

function InfoContainer({ average, deadlines }) {
  return (
    <View style={styles.container}>
      <View style={styles.dueDateContainer}>
        {deadlines.map((deadline) => displayDueDate(deadline))}
      </View>
      <View style={styles.averageContainer}>
        <Text>{average}%</Text>
      </View>
    </View>
  );
}

function displayDueDate(deadline) {
  const diffTime = Math.abs(deadline.dueDate - new Date().setHours(0, 0, 0, 0));
  var dueDate = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (dueDate == 0) {
    dueDate = `${deadline.title} due today`;
  } else if (dueDate == 1) {
    dueDate = `${deadline.title} due tomorrow`;
  } else {
    dueDate = `${deadline.title} due in ${dueDate} days`;
  }
  return <Text style={styles.dueDateText}>{dueDate}</Text>;
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
});

export default InfoContainer;
