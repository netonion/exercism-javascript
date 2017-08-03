function Robot() {
  this.name = this.genName();
}

Robot.names = {}
Robot.prototype.genName = function() {
  let name;
  do {
    name = String.fromCharCode(Math.floor(Math.random() * 26 + 'A'.charCodeAt(0)));
    name += String.fromCharCode(Math.floor(Math.random() * 26 + 'A'.charCodeAt(0)));
    name += Math.random().toString().slice(2, 5);
  } while (Robot.names[name])

  Robot.names[name] = true;
  return name;
};

Robot.prototype.reset = function() {
  Robot.call(this);
};

module.exports = Robot;
