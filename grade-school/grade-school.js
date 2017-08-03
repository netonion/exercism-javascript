function School() { this.grades = {}; }

School.prototype.roster = function() {
  return this.grades;
};

School.prototype.add = function(student, grade) {
  this.grades[grade] ? this.grades[grade].push(student) : this.grades[grade] = [student];
  this.grades[grade].sort();
};

School.prototype.grade = function(grade) {
  return this.grades[grade] || [];
};


module.exports = School;
