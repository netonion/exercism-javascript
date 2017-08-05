const mappings =
  {1000: "M", 900: "CM", 500: "D", 400: "CD",
    100: "C",  90: "XC",  50: "L",  40: "XL",
     10: "X",   9: "IX",   5: "V",   4: "IV",
      1: "I"};

const bounds = Object.keys(mappings).reverse(); // from large to small

function toRoman(n) {
  if (n <= 0) return '';
  for (let bound of bounds) {
    if (n >= Number(bound)) return mappings[bound] + toRoman(n - Number(bound));
  }
}

module.exports = toRoman;
