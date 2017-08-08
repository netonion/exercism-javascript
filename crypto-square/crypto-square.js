class Crypto {

  constructor(text) {
    this.text = text;
  }

  normalizePlaintext() {
    return this.text.toLowerCase().replace(/\W/g, '');
  }

  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }

  plaintextSegments() {
    let size = this.size();
    let normalized = this.normalizePlaintext();
    let res = [];
    for (var i = 0; i < normalized.length; i += size) {
      res.push(normalized.substr(i, size));
    }
    return res;
  }

  ciphertext() {
    let segments = this.plaintextSegments();
    let res = '';
    for (var i = 0; i < this.size(); i++) {
      res += segments.map(x => x.charAt(i)).join('');
    }
    return res;
  }
}

module.exports = Crypto;
