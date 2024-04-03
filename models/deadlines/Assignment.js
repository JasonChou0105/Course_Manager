import Deadline from "../Deadline";

export default class Assignment extends Deadline {
  constructor(name, dueDate, description, totalMark, achivedMark, work, id) {
    super(name, dueDate, description);
    this.totalMark = totalMark;
    this.achivedMark = achivedMark;
    this.work = work;
    this.id = id;
  }
}
