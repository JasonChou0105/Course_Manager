import { StyleSheet, Text, View } from "react-native";
import { Header3 } from "../../Headers/DefaultHeaders/Headers";
import displayDueDate from "../../../HelperFunctions/DueDates/displayDueDate";

function UpcomingItem({ dueDate, name, template }) {
  return (
    <View style={styles.container}>
      <Header3>{name}</Header3>
      <View style={styles.dueDateContainer}>
        <Text style={styles.dueDateText}>
          {`${template} ${displayDueDate(dueDate)}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#999999b1",
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
