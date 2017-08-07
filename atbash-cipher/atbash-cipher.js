let key = {};
for (let i = 0; i < 26; i++) {
  let k = String.fromCharCode('a'.charCodeAt(0) + i);
  let v = String.fromCharCode('z'.charCodeAt(0) - i);
  key[k] = v;
}

function encode(msg) {
  return msg.toLowerCase().split('').reduce((acc, x) => {
    if (/\W/.test(x)) return acc;
    if (acc.length % 6 === 5) acc = acc + ' ';
    if (/\d/.test(x)) return acc + x;
    return acc + key[x];
  }, '');
}

exports.encode = encode;
