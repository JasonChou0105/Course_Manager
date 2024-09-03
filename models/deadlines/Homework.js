import Deadline from "../Deadline";

export default class Homework extends Deadline {
  constructor({
    name = "",
    dueDate = "",
    description = "",
    submission = "",
    id,
  }) {
    super(name, dueDate, description);
    this.submission = submission;
    this.id = id;
  }
}
