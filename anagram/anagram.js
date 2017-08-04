function sort(word) {
  return word.toLowerCase().split('').sort().join('');
}

class Anagram {

  constructor(word) {
    this.word = word;
  }

  matches(...list) {
    list = typeof list[0] === 'string' ? list : list[0];
    return list.filter(x => sort(x) === sort(this.word) && x.toLowerCase() !== this.word.toLowerCase());
  }
}

module.exports = Anagram;
