class Series {

  constructor(digits) {
    this.digits = digits.split('').map(Number);
  }

  slices(n) {
    if (n > this.digits.length) throw new Error('Slice size is too big.');

    let res = []
    for (var i = 0; i <= this.digits.length - n; i++) {
      res.push(this.digits.slice(i, i + n));
    }

    return res;
  }
}

module.exports = Series;
