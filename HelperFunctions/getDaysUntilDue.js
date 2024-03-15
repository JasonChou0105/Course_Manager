function getDaysUntilDue(date) {
  const diffTime = Math.abs(date - new Date().setHours(0, 0, 0, 0));
  const DaysUntilDue = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return DaysUntilDue;
}

export default getDaysUntilDue;
