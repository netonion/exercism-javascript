class Flattener {
  flatten(arr) {
    return arr.reduce((acc, x) =>
      x === null ? acc : acc.concat(Array.isArray(x) ? this.flatten(x) : x)
    , []);
  }
}

module.exports = Flattener;
