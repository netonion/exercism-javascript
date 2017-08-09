class Proverb {

  constructor(...list) {
    let last = list.pop();
    if (last.qualifier) {
      this.list = list;
      this.qualifier = last.qualifier + ' ';
    } else {
      this.list = list.concat([last]);
      this.qualifier = '';
    }
  }

  toString() {
    let prov = ''
    for (var i = 0; i < this.list.length - 1; i++) {
      prov += `For want of a ${this.list[i]} the ${this.list[i + 1]} was lost.\n`
    }
    return prov + `And all for the want of a ${this.qualifier}${this.list[0]}.`
  }

}

module.exports = Proverb;
