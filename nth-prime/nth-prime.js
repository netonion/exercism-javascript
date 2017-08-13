function prime(n) {

  if (n < 1) throw new Error('Prime is not possible');

  let notPrime = [];
  let primes = [];
  let limit = 200000;

  for (let i = 2; i < limit; i++) {
    if (!notPrime[i]) {
      primes.push(i);
      for (let j = i + i; j < limit; j += i) notPrime[j] = true;
    }
  }

  return primes[n - 1];
}

exports.nth = prime;
