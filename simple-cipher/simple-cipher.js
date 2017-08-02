function Cipher(key) {
  if (!/^[a-z]+$/.test(key)) throw new Error('Bad key'); // undefined pass here because it's cast to 'undefined'
  this.key = key ? key : this.genKey();
}

Cipher.prototype.genKey = function() {
  let key = ''
  for (let i = 99; i >= 0; i--) {
    key += String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
  }
  return key;
}

Cipher.prototype.encode = function(str) {
  let encoded = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) + this.key.charCodeAt(i) - 'a'.charCodeAt(0);
    encoded += String.fromCharCode(code > 'z'.charCodeAt(0) ? code - 26 : code);
  }
  return encoded;
};

Cipher.prototype.decode = function(str) {
  let decoded = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i) - this.key.charCodeAt(i) + 'a'.charCodeAt(0);
    decoded += String.fromCharCode(code < 'a'.charCodeAt(0) ? code + 26 : code);
  }
  return decoded;
};

module.exports = Cipher;
