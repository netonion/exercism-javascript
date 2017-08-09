class Luhn {

  constructor(digits) {
    digits = digits.replace(/\ /g, '');

    if (digits.length <= 1 || /\D/.test(digits)) {
      this.valid = false;
    } else {
      if (digits.length % 2) digits =  '0' + digits;

      let sum = 0;
      for (let i = 1; i < digits.length; i += 2) {
        sum += Number(digits[i]);
      }

      for (let i = 0; i < digits.length; i += 2) {
        let d = 2 * Number(digits[i]);
        sum += d > 9 ? d - 9 : d;
      }
      this.valid = (sum % 10 === 0);
    }
  }

}

module.exports = Luhn;
