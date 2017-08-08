class Trinary {

  constructor(trinary) {
    this.trinary = trinary;
  }

  toDecimal() {
    if (/[^0-2]/.test(this.trinary)) return 0;
    return this.trinary.split('').reduce((acc, x) =>
      acc * 3 + x.charCodeAt() - '0'.charCodeAt(0)
    , 0)
  }
}

module.exports = Trinary;
