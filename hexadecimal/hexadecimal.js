class Hexadecimal {

  constructor(digits) {
    this.digits = digits;
  }

  toDecimal() {
    if (/[^0-9a-f]/.test(this.digits)) return 0;

    let decimal = 0;
    for (let i = 0; i < this.digits.length; i++) {
      let c = this.digits.charCodeAt(i);
      let a = 'a'.charCodeAt(0);
      let z = '0'.charCodeAt(0);
      decimal = decimal * 16 + (c >= a ? c - a + 10 : c - z);
    }

    return decimal;
  }
}

module.exports = Hexadecimal;
