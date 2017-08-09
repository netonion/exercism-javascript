class Triplet {

  constructor(a, b, c) {
    [this.a, this.b, this.c] = [a, b, c].sort((x, y) => x - y);
  }


  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2);
  }

  static where({maxFactor, minFactor, sum}) {
    minFactor = minFactor || 1;

    let pythagorean = []
    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a + 1; b <= maxFactor; b++) {
        for (let c = b + 1; c <= maxFactor; c++) {
          if (sum === undefined || a + b + c === sum) {
            let triplet = new Triplet(a, b, c);
            if (triplet.isPythagorean()) pythagorean.push(triplet);
          }
        }
      }
    }

    return pythagorean;
  };

}

module.exports = Triplet;
