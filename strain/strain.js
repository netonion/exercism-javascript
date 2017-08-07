function keep(list, cb) {
  let keep = [];
  for (let item of list) {
    if (cb(item)) keep.push(item);
  }
  return keep;
}

function discard(list, cb) {
  return keep(list, item => !cb(item));
}

exports.keep = keep;
exports.discard = discard;
