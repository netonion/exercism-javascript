const notPrime = [];

class Sieve {

  constructor(limit) {
    this.primes = [];

    for (var i = 2; i <= limit; i++) {
      if (!notPrime[i]) {
        this.primes.push(i);
        for (var j = i + i; j <= limit; j += i) notPrime[j] = true;
      }
    }
  }

}

module.exports = Sieve;
