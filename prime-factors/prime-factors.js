function primeFactor(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    while (!(num % i)) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

module.exports = {for: primeFactor}
