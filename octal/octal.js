class Octal {

  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    let decimal = 0;

    for (let i = 0; i < this.octal.length; i++) {
      let c = this.octal[i];
      if (c < '0' || c > '7') return 0;
      decimal = decimal * 8 + c.charCodeAt(0) - '0'.charCodeAt(0);
    }

    return decimal;
  }
}

module.exports = Octal;
