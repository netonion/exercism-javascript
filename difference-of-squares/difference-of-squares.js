function squareOfSums(n) {
  return Math.pow((1 + n) * n / 2, 2);
}

function sumOfSquares(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += Math.pow(i, 2);
  }
  return res;
}

class Squares {

  constructor(n) {
    this.squareOfSums = squareOfSums(n);
    this.sumOfSquares = sumOfSquares(n);
    this.difference = this.squareOfSums - this.sumOfSquares;
  }

}

module.exports = Squares;
