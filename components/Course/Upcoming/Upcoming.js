import { FlatList, StyleSheet, Text, View } from "react-native";
import { Header3 } from "../../Headers/DefaultHeaders/Headers";
import Card from "../../Card";
import UpcomingItem from "./UpcomingItem";
import getUpcomingDueDates from "../../../HelperFunctions/DueDates/getUpcomingDueDates";
import COLORS from "../../../constants/Colors/COLORS";

function Upcoming({ data, template = "", title }) {
  function renderDueDate(data) {
    return (
      <UpcomingItem
        name={data.name}
        dueDate={data.dueDate}
        template={template}
      />
    );
  }

  var [upcoming, additional] = getUpcomingDueDates(data, 4);
  return (
    <Card onPress={() => {}}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.itemsContainer}>
        {upcoming.length != 0 ? (
          upcoming.map((deadline) => renderDueDate(deadline))
        ) : (
          <Text style={styles.extraText}>Nothing due soon :)</Text>
        )}
        {additional != 0 && (
          <Text style={styles.extraText}>+{additional} more this week...</Text>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    padding: 8,
  },
  extraText: {
    fontStyle: "italic",
    fontSize: 11,
    color: "#5a5a5a",
    margin: 8,
  },
  itemsContainer: {
    marginTop: 8,
  },
  titleText: {
    fontSize: 15,
    color: COLORS.textColor,
  },
});

export default Upcoming;
