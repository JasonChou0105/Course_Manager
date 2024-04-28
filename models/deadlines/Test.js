import Deadline from "../Deadline";

export default class Test extends Deadline {
  constructor(
    name = "",
    testDate = "",
    description = "",
    totalMark = "",
    achivedMark = "",
    weight = "",
    id = ""
  ) {
    super(name, testDate, description);
    this.totalMark = totalMark;
    this.achivedMark = achivedMark;
    this.weight = weight;
    this.id = id;
  }
}
