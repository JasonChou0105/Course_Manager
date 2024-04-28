export default class Course {
  constructor({
    name = "",
    description = "",
    banner = "",
    average = "--",
    tests = [],
    assignments = [],
    homework = [],
    id = "0",
  }) {
    this.name = name;
    this.description = description;
    this.banner = banner;
    this.average = average;
    this.tests = tests;
    this.assignments = assignments;
    this.homework = homework;
    this.id = id;
  }
  toJSON() {
    var newHomework = [];
    if (this.homework) {
      for (const item of this.homework) {
        newHomework.push({
          name: item.name,
          dueDate: item.dueDate,
          id: item.id,
        });
      }
    }
    var newAssignments = [];
    if (this.assignments) {
      for (const assignment of this.assignments) {
        newAssignments.push({
          name: assignment.name,
          dueDate: assignment.dueDate,
          id: assignment.id,
        });
      }
    }
    var newTests = [];
    if (this.tests) {
      for (const test of this.tests) {
        newTests.push({
          name: test.name,
          dueDate: test.dueDate,
          id: test.id,
        });
      }
    }
    const res = {
      name: this.name,
      description: this.description,
      banner: this.banner,
      average: this.average,
      tests: newTests,
      assignments: newAssignments,
      homework: newHomework,
      id: this.id,
    };
    console.log(res);
    return res;
  }
}
