function Isogram(word) {
  this.chars = word.toLowerCase().replace(/[^a-zà-ÿ]/g, "").split("");
}

Isogram.prototype.isIsogram = function() {
  return this.chars.length === new Set(this.chars).size;
};

module.exports = Isogram;
