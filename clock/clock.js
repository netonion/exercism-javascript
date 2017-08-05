class Clock {

  constructor(hr, min = 0) {
    this.hr = hr;
    this.min = min
  }

  toString() {
    let min = this.min % 60;
    let carry = parseInt(this.min / 60);
    if (min < 0) {
      min += 60;
      carry -= 1;
    }
    let hr = (this.hr + carry) % 24;
    if (hr < 0) hr += 24;

    return `${hr < 10 ? 0 : ''}${hr}:${min < 10 ? 0 : ''}${min}`;
  }

  plus(min) {
    return new Clock(this.hr, this.min + min);
  }

  minus(min) {
    return new Clock(this.hr, this.min - min);
  }

  equals(that) {
    return this.toString() === that.toString();
  }
}

exports.at = function (hr, min) {
  return new Clock(hr, min);
};
