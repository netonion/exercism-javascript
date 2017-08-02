function SpaceAge(seconds) { this.seconds = seconds; }

const toEarth = seconds => seconds / 31557600;

SpaceAge.prototype.onEarth = function() {
  return toEarth(this.seconds).toFixed(2) / 1;
};

SpaceAge.prototype.onMercury = function() {
  return (toEarth(this.seconds) / 0.2408467).toFixed(2) / 1;
};

SpaceAge.prototype.onVenus = function() {
  return (toEarth(this.seconds) / 0.61519726).toFixed(2) / 1;
};

SpaceAge.prototype.onMars = function() {
  return (toEarth(this.seconds) / 1.8808158).toFixed(2) / 1;
};

SpaceAge.prototype.onJupiter = function() {
  return (toEarth(this.seconds) / 11.862615).toFixed(2) / 1;
};

SpaceAge.prototype.onSaturn = function() {
  return (toEarth(this.seconds) / 29.447498).toFixed(2) / 1;
};

SpaceAge.prototype.onUranus = function() {
  return (toEarth(this.seconds) / 84.016846).toFixed(2) / 1;
};

SpaceAge.prototype.onNeptune = function() {
  return (toEarth(this.seconds) / 164.79132).toFixed(2) / 1;
};

module.exports = SpaceAge;
