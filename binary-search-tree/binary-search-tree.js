class Bst {
  constructor(data) {
    this.data = data
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (this.data >= data) {
      this.left ? this.left.insert(data) : this.left = new Bst(data);
    } else {
      this.right ? this.right.insert(data) : this.right = new Bst(data);
    }
  }

  each(cb) {
    if (this.left) this.left.each(cb);
    cb(this.data);
    if (this.right) this.right.each(cb);
  }
}

module.exports = Bst;
