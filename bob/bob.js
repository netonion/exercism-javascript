function Bob() {}

Bob.prototype.hey = function(words) {
  if (/^\s*$/.test(words)) return 'Fine. Be that way!';
  if (/^[A-Z]+$/.test(words.replace(/[\W\d]/g, ""))) return 'Whoa, chill out!';
  if (words.trim().endsWith('?')) return 'Sure.'
  return 'Whatever.'
};

module.exports = Bob;
