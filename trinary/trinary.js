class Trinary {

  constructor(trinary) {
    this.trinary = trinary;
  }

  toDecimal() {
    let decimal = 0;
    for (let i = 0; i < this.trinary.length; i++) {
      let c = this.trinary[i];
      if (c < '0' || c > '2') return 0;
      decimal = decimal * 3 + c.charCodeAt(0) - '0'.charCodeAt(0);
    }
    return decimal;
  }
}

module.exports = Trinary;
