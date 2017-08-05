class PerfectNumber {

  classify(n) {
    if (n <= 0) return 'Classification is only possible for natural numbers.';

    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (!(n % i)) sum += i;
    }

    if (sum < n) return 'deficient';
    if (sum > n) return 'abundant';
    return 'perfect';
  }
}

module.exports = PerfectNumber;
