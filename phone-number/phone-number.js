function PhoneNumer(phone) {
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  this.digits = digits;
}

PhoneNumer.prototype.number = function() {
  return (this.digits.length === 10 && this.digits[0] > '1' && this.digits[3] > '1') ? this.digits : null;
};

module.exports = PhoneNumer;
