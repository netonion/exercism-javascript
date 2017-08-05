class Triangle {

  constructor(a, b, c) {
    this.edges = [a, b, c];
  }

  kind() {
    let [a, b, c] = this.edges.sort((x, y) => x - y);
    if (a <= 0 || a + b <= c) throw new Error();
    if (a === b && b === c) return 'equilateral';
    if (a === b || b === c) return 'isosceles';
    return 'scalene';
  }
}

module.exports = Triangle;
