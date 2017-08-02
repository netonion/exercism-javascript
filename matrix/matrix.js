function Matrix(str) {
  this.rows = str.split("\n").map((r) => r.split(" ").map(Number));
  this.columns = this.rows[0].map((_, c) => this.rows.map((r) => r[c]));
}

module.exports = Matrix;
