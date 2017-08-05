function isSublist(l1, l2) {
  for (let i = 0; i <= l2.length - l1.length; i++) {
    let j;
    for (j = 0; j < l1.length; j++) {
      if (l1[j] !== l2[i + j]) break;
    }
    if (j === l1.length) return true;
  }
  return false;
}

class List {

  constructor(list = []) {
    this.list = list;
  }

  compare(that) {
    let l1 = this.list;
    let l2 = that.list;
    if (l1.length === l2.length && isSublist(l1, l2)) return 'EQUAL';
    if (l1.length < l2.length && isSublist(l1, l2)) return 'SUBLIST';
    if (l2.length < l1.length && isSublist(l2, l1)) return 'SUPERLIST';
    return 'UNEQUAL';
  }
}

module.exports = List;
