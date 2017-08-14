rules = {
  90: 'ninety',
  80: 'eighty',
  70: 'seventy',
  60: 'sixty',
  50: 'fifty',
  40: 'forty',
  30: 'thirty',
  20: 'twenty',
  19: 'nineteen',
  18: 'eighteen',
  17: 'seventeen',
  16: 'sixteen',
  15: 'fifteen',
  14: 'fourteen',
  13: 'thirteen',
  12: 'twelve',
  11: 'eleven',
  10: 'ten',
  9: 'nine',
  8: 'eight',
  7: 'seven',
  6: 'six',
  5: 'five',
  4: 'four',
  3: 'three',
  2: 'two',
  1: 'one'
}

function say(num) {
  if (num < 0 || num > 999999999999) throw new Error('Number must be between 0 and 999,999,999,999.');
  if (num === 0) return 'zero';
  let res = [];

  let bils = Math.floor(num / 1000000000);
  if (bils) res.push(sayThreeDigits(bils) + ' billion');

  num = num % 1000000000;
  let mils = Math.floor(num / 1000000);
  if (mils) res.push(sayThreeDigits(mils) + ' million');

  num = num % 1000000;
  let thousands = Math.floor(num / 1000);
  if (thousands) res.push(sayThreeDigits(thousands) + ' thousand');

  num = num % 1000;
  if (num) res.push(sayThreeDigits(num));

  return res.join(' ');
}

function sayThreeDigits(num) {
  let hundreds = Math.floor(num / 100);
  let tens = num % 100;
  let res = '';
  if (hundreds) res += rules[hundreds] + ' hundred';
  if (hundreds && tens) res += ' ';
  if (tens) res += sayTwoDigits(tens);
  return res;
}

function sayTwoDigits(num) {
  if (num < 20 || num % 10 === 0) return rules[num];
  let tens = num - num % 10;
  return `${rules[tens]}-${rules[num - tens]}`;
}

exports.inEnglish = say;
