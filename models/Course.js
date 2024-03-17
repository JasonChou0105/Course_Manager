//name, banner, description, average, tests/assignments (new object array), deadlines (new object array)

export default class Course {
  constructor(name, description, banner, average, grades, deadlines, id) {
    this.name = name;
    this.description = description;
    this.banner = banner;
    this.average = average;
    this.grades = grades;
    this.deadlines = deadlines;
    this.id = id;
  }
}
