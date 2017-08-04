class List {

  constructor(values = []) { this.values = values; }

  push(x) {
    this.values.push(x);
  }

  append(list) {
    for (let x of list.values) this.push(x);
    return this;
  }

  concat(list) {
    return this.append(list);
  }

  filter(cb) {
    let results = new List();
    for (let x of this.values) {
      if (cb(x)) results.push(x);
    }
    return results;
  }

  length() {
    let count = 0;
    for (let x of this.values) count++;
    return count;
  }

  map(cb) {
    let results = new List();
    for (let x of this.values) results.push(cb(x));
    return results;
  }

  foldl(cb, acc) {
    for (let x of this.values) {
      acc = cb(x, acc);
    }
    return acc;
  }

  foldr(cb, acc) {
    for (var i = this.values.length - 1; i >= 0; i--) {
      acc = cb(this.values[i], acc);
    }
    return acc;
  }

  reverse() {
    let results = new List();
    for (var i = this.values.length - 1; i >= 0; i--) {
      results.push(this.values[i]);
    }
    return results;
  }
}

module.exports = List;
