const encode = str => {
  let res = '';
  let prev = '';
  let count = 0;
  for (let c of str) {
    if (c === prev) {
      count++;
    } else {
      res += /\W/.test(prev) ? prev.repeat(count) : `${count <= 1 ? '' : count}${prev}`;
      count = 1;
      prev = c;
    }
  }
  return res + `${count <= 1 ? '' : count}${prev}`;
}

const decode = str => {
  let res = '';
  let count = 0;
  for (let c of str){
    if (/\d/.test(c)) {
      count = count * 10 + Number(c);
    } else if (count) {
      res += c.repeat(count);
      count = 0;
    } else {
      res += c;
    }
  }
  return res;
}

module.exports = {encode, decode};
