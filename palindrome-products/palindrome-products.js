function isPalindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (!(str[i] === str[str.length - 1 - i])) return false;
  }
  return true;
}

class Palindrome {

  constructor({minFactor, maxFactor}) {
    this.minFactor = minFactor || 1;
    this.maxFactor = maxFactor;
  }

  generate() {
    let min = Infinity;
    let max = -Infinity;
    let minFactors = [];
    let maxFactors = [];

    for (let i = this.minFactor; i <= this.maxFactor; i++) {
      for (let j = i; j <= this.maxFactor; j++) {
        let p = i * j;
        if (isPalindrome(p.toString())) {
          if (p === min) minFactors.push([i, j]);
          if (p === max) maxFactors.push([i, j]);
          if (p < min) {
            min = p;
            minFactors = [[i, j]];
          }
          if (p > max) {
            max = p;
            maxFactors = [[i, j]];
          };
        }
      }
    }

    this.min = {value: min, factors: minFactors};
    this.max = {value: max, factors: maxFactors};
  }

  smallest() {
    return this.min;
  }

  largest() {
    return this.max;
  }
}

module.exports = Palindrome;
