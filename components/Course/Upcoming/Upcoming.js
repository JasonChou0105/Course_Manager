import { FlatList, StyleSheet, Text, View } from "react-native";
import { Header3 } from "../../Headers/DefaultHeaders/Headers";
import CourseCard from "../CourseCard";
import UpcomingItem from "./UpcomingItem";
import getUpcomingDueDates from "../../../HelperFunctions/DueDates/getUpcomingDueDates";
import COLORS from "../../../constants/Colors/COLORS";

function Upcoming({ deadlines }) {
  var [upcoming, additional] = getUpcomingDueDates(deadlines, 4);
  return (
    <CourseCard>
      <View style={styles.headerContainer}>
        <Header3>Upcoming</Header3>
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
    </CourseCard>
  );
}

function renderDueDate(data) {
  return <UpcomingItem name={data.name} dueDate={data.dueDate} />;
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
});

export default Upcoming;
