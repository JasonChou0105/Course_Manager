import getDaysUntilDue from "./getDaysUntilDue";

export default function displayDueDates(deadline) {
  var daysUntilDue = getDaysUntilDue(deadline);
  if (daysUntilDue == 0) {
    dueDate = `due today`;
  } else if (daysUntilDue == 1) {
    dueDate = `due tomorrow`;
  } else {
    dueDate = `due in ${daysUntilDue} days`;
  }
  return dueDate;
}
