function Bob() {}

Bob.prototype.hey = function(words) {
  if (words.trim() === "") return 'Fine. Be that way!';
  if (/[A-Z]/.test(words) && !/[a-z]/.test(words)) return 'Whoa, chill out!';
  if (words.trim().endsWith('?')) return 'Sure.'
  return 'Whatever.'
};

module.exports = Bob;
