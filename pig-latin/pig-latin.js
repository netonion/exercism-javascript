function translateOneWord(word) {
  let i = 0;

  while (!['a', 'e', 'i', 'o', 'u'].includes(word[i])) {
    if (word[i] === 'q') i++;
    i++;
  }

  return word.slice(i) + word.slice(0, i) + 'ay';
}

function translate(words) {
  return words.split(' ').map(translateOneWord).join(' ');
}

exports.translate = translate;
