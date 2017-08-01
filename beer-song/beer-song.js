function BeerSong() {}

BeerSong.prototype.verse = function(num) {
  if (num > 2)
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
  if (num === 2)
    return `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`;
  if (num === 1)
    return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;

  return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
};

BeerSong.prototype.sing = function(begin, end = 0) {
  let verses = [];
  for (let i = begin ; i >= end; i--)
    verses.push(this.verse(i))

  return verses.join('\n');
};

module.exports = BeerSong;
