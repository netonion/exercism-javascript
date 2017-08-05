class Words {

  count(str) {
    return str.split(/[^\u00C0-\u1FFF\u2C00-\uD7FF\w']+/).reduce((acc, word) => {
      if (!word) return acc;
      if (word.startsWith("'") && word.endsWith("'")) word = word.slice(1, -1);
      acc[word.toLowerCase()] = (acc[word.toLowerCase()] || 0) + 1;
      return acc;
    }, Object.create(null));
  }
}

module.exports = Words;
