function Hamming() {}

Hamming.prototype.compute = function (a, b) {
  if (a.length !== b.length) throw new Error('DNA strands must be of equal length.');

  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }

  return count;
}

module.exports = Hamming;
