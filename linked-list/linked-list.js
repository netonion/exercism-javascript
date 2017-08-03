function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this.nil = new Node(null);
  this.nil.next = this.nil;
  this.nil.prev = this.nil;
}

LinkedList.prototype.push = function(val) {
  let node = new Node(val);
  this.nil.prev.next = node;
  node.prev = this.nil.prev;
  node.next = this.nil;
  this.nil.prev = node;
};

LinkedList.prototype.pop = function() {
  let node = this.nil.prev;
  this.remove(node);
  return node.val
};

LinkedList.prototype.unshift = function(val) {
  let node = new Node(val);
  this.nil.next.prev = node;
  node.next = this.nil.next;
  node.prev = this.nil;
  this.nil.next = node;
};

LinkedList.prototype.shift = function() {
  let node = this.nil.next;
  this.remove(node)
  return node.val
};

LinkedList.prototype.count = function() {
  let count = 0;
  let head = this.nil;
  while (head.next !== this.nil) {
    head = head.next;
    count++;
  }
  return count;
};

LinkedList.prototype.delete = function(val) {
  let node = this.nil.next;
  while(node !== this.nil && node.val !== val) node = node.next;
  this.remove(node);
};

LinkedList.prototype.remove = function(node) {
  if (node !== this.nil) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
};

module.exports = LinkedList;
