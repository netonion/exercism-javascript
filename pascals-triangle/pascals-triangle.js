function Triangle(num) {
  this.rows = [[1]];
  for (let i = 1; i < num; i++) {
    this.rows[i] = [1];
    for (let j = 1; j < i; j++) {
      this.rows[i].push(this.rows[i - 1][j - 1] + this.rows[i - 1][j]);
    }
    this.rows[i].push(1);
  }
  this.lastRow = this.rows[num - 1];
}

module.exports = Triangle;
