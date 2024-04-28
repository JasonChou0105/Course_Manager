import getDaysUntilDue from "./getDaysUntilDue";

export default function displayDueDates(deadline) {
  var daysUntilDue = getDaysUntilDue(deadline);
  if (daysUntilDue == 0) {
    dueDate = `today`;
  } else if (daysUntilDue == 1) {
    dueDate = `tomorrow`;
  } else {
    dueDate = `in ${daysUntilDue} days`;
  }
  return dueDate;
}
