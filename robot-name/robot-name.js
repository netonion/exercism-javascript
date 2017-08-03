let names = {};

class Robot {

  constructor() {
    this.reset();
  }

  genName() {
    let name;

    do {
      name = String.fromCharCode(Math.floor(Math.random() * 26 + 'A'.charCodeAt(0)));
      name += String.fromCharCode(Math.floor(Math.random() * 26 + 'A'.charCodeAt(0)));
      name += Math.random().toString().slice(2, 5);
    } while (names[name]);

    names[name] = true;
    return name;
  }

  reset() {
    this.name = this.genName();
  }
}

module.exports = Robot;
