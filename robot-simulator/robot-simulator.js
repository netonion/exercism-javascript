const directions = ['east', 'south', 'west', 'north'];
const instructions = {L: 'turnLeft', R: 'turnRight', A: 'advance'};

class Robot {

  orient(direction) {
    if (!directions.includes(direction)) throw new Error('Invalid Robot Bearing');
    this.bearing = direction;
  }

  turnRight() {
    let nextIdx = (directions.indexOf(this.bearing) + 1) % 4;
    this.bearing = directions[nextIdx];
  }

  turnLeft() {
    let prevIdx = (directions.indexOf(this.bearing) + 3) % 4;
    this.bearing = directions[prevIdx];
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
    let [x, y] = this.coordinates;
    switch (this.bearing) {
      case 'east' : x++; break;
      case 'south': y--; break;
      case 'west' : x--; break;
      case 'north': y++; break;
    }
    this.coordinates = [x, y];
  }

  instructions(inst) {
    return inst.split('').map(x => instructions[x]);
  }

  place({x, y, direction}) {
    this.at(x, y);
    this.orient(direction);
  }

  evaluate(inst) {
    this.instructions(inst).forEach(x => this[x]());
  }
}

module.exports = Robot;
