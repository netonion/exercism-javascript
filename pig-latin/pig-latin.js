function translateOneWord(word) {
  if (['a', 'e', 'i', 'o', 'u'].includes(word[0])) return word + 'ay';

  if (word.startsWith('sch') || word.startsWith('thr') || word.slice(1, 3) === 'qu') {
    return word.slice(3) + word.slice(0, 3) + 'ay';
  }

  if (word.startsWith('ch') || word.startsWith('th') || word.startsWith('qu')) {
    return word.slice(2) + word.slice(0, 2) + 'ay';
  }

  return word.slice(1) + word[0] + 'ay';
}

function translate(words) {
  return words.split(' ').map(translateOneWord).join(' ');
}

exports.translate = translate;
