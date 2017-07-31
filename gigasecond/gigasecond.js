function Gigasecond(start) { this.start = start; }

Gigasecond.prototype.date = function() {
  return new Date(this.start.getTime() + 1e12);
};

module.exports = Gigasecond;
