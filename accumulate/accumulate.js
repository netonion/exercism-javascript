function accumulate(list, cb) {
  let acc = [];
  for (let x of list) acc.push(cb(x));
  return acc
}

module.exports = accumulate;
