class Luhn {

  constructor(digits) {
    digits = digits.replace(/\ /g, '');

    if (digits.length <= 1 || /\D/.test(digits)) {
      this.valid = false;
    } else {
      if (digits.length % 2) digits =  '0' + digits;
      this.valid = digits.split('').reduce((acc, x, i) => {
        if (i % 2) return acc + Number(x);
        let d = 2 * Number(x);
        return d > 9 ? acc + d - 9 : acc + d;
      }, 0) % 10 === 0;
    }
  }

}

module.exports = Luhn;
