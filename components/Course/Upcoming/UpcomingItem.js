import { StyleSheet, Text, View } from "react-native";
import { Header3 } from "../../Headers/DefaultHeaders/Headers";
import displayDueDate from "../../../HelperFunctions/DueDates/displayDueDate";
import COLORS from "../../../constants/Colors/COLORS";

function UpcomingItem({ dueDate, name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.dueDateContainer}>
        <Text style={styles.dueDateText}>
          {displayDueDate(new Date(dueDate))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 18,
    margin: 2,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ffffff",
    borderBottomColor: "#a2a2a22b",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#72727278",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dueDateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    fontSize: 13,
    color: COLORS.textColor,
  },
  dueDateText: {
    fontSize: 12,
    color: COLORS.textColor,
  },
});

export default UpcomingItem;
