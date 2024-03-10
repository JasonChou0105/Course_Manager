//name, banner, average, tests/assignments (new object array), deadlines (new object array)

export default class Course {
  constructor(name, banner, average, grades, deadlines, id) {
    this.name = name;
    this.banner = banner;
    this.average = average;
    this.grades = grades;
    this.deadlines = deadlines;
    this.id = id;
  }
}
