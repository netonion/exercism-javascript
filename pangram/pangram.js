function Pangram(text) { this.text = text; }

Pangram.prototype.isPangram = function() {
  const chars = this.text.replace(/[\W\d_]/g, "").toLowerCase().split("");
  return new Set(chars).size === 26;
}

module.exports = Pangram;
