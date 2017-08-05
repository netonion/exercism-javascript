class List {

  constructor(list = []) {
    this.list = list;
  }

  compare(that) {
    let l1 = this.list.join(" ");
    let l2 = that.list.join(" ");
    if (l1 === l2) return 'EQUAL';
    if (l1.includes(l2)) return 'SUPERLIST';
    if (l2.includes(l1)) return 'SUBLIST';
    return 'UNEQUAL';
  }
}

module.exports = List;
