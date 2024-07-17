import { StyleSheet, Text, View } from "react-native";
import { Header3 } from "../../Headers/DefaultHeaders/Headers";
import displayDueDate from "../../../HelperFunctions/DueDates/displayDueDate";

function UpcomingItem({ dueDate, name, template }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.dueDateContainer}>
        <Text style={styles.dueDateText}>
          {`${template} ${displayDueDate(new Date(dueDate))}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#99999923",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dueDateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    fontSize: 13,
  },
  dueDateText: {
    fontSize: 12,
  },
});

export default UpcomingItem;
