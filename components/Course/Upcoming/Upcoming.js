import { FlatList, StyleSheet, View } from "react-native";
import Header3 from "../../Headers/Header3";
import CourseCard from "../CourseCard";
import UpcomingItem from "./UpcomingItem";
import getUpcomingDueDates from "../../../HelperFunctions/DueDates/getUpcomingDueDates";

function Upcoming({ deadlines }) {
  var [newDeadlines, additional] = getUpcomingDueDates(deadlines, 4);
  return (
    <CourseCard>
      <View style={styles.headerContainer}>
        <Header3>Upcoming</Header3>
      </View>
      <View>{newDeadlines.map((deadline) => renderDueDate(deadline))}</View>
    </CourseCard>
  );
}

function renderDueDate(data) {
  return <UpcomingItem name={data.name} dueDate={data.dueDate} />;
}

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
});

export default Upcoming;
