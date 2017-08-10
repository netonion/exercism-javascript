class Series {

  constructor(digits) {
    this.digits = digits;
  }

  largestProduct(n) {
    if (/\D/.test(this.digits) || n < 0) throw new Error('Invalid input.');
    if (n > this.digits.length) throw new Error('Slice size is too big.');

    let largest = 0;
    for (let i = 0; i <= this.digits.length - n; i++) {
      let product = this.digits.substr(i, n).split('').reduce((acc, x) => acc * Number(x), 1);
      if (product > largest) largest = product;
    }

    return largest;
  }
}

module.exports = Series;
