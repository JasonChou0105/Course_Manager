import getDaysUntilDue from "./getDaysUntilDue";

function getUpcomingDueDates(deadlines, amount) {
  var newDeadlines = [];
  var needed = amount ? amount : deadlines.length;
  var count = 0;
  for (const deadline of deadlines) {
    dueDate = getDaysUntilDue(deadline.dueDate);
    if (dueDate < 7 && count < needed) {
      newDeadlines.push(deadline);
      count++;
    } else if (dueDate < 7) {
      count++;
    }
  }
  var additional = newDeadlines.length - count;
  return [newDeadlines, additional];
}

export default getUpcomingDueDates;
