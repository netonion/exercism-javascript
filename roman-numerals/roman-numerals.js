const mappings =
  {1000: "M", 900: "CM", 500: "D", 400: "CD",
    100: "C",  90: "XC",  50: "L",  40: "XL",
     10: "X",   9: "IX",   5: "V",   4: "IV",
      1: "I"}

function toRoman(n) {
  let roman = '';
  for (let bound of Object.keys(mappings).reverse()) {
    while (n >= Number(bound)) {
      roman += mappings[bound];
      n -= Number(bound);
    }
  }
  return roman;
}

module.exports = toRoman;
