function Binary(binary) {
  this.binary = /^[01]+$/.test(binary) ? binary : "0";
}

Binary.prototype.toDecimal = function() {
  return this.binary.split("").reduce((acc, x) => acc * 2 + (x === "1" ? 1 : 0), 0);
};

module.exports = Binary;
