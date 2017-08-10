const defaults = ['alice', 'bob', 'charlie', 'david',
                  'eve', 'fred', 'ginny', 'harriet',
                  'ileana', 'joseph', 'kincaid', 'larry'];
const mappings = {V: 'violets', C: 'clover', G: 'grass', R: 'radishes'};

class Garden {

  constructor(plants, students = defaults) {
    students = students.sort().map(x => x.toLowerCase());
    let length = (plants.length - 1) / 4;
    for (var i = 0; i < length; i++) {
      this[students[i]] = [mappings[plants[i * 2]]];
      this[students[i]].push(mappings[plants[i * 2 + 1]]);
      this[students[i]].push(mappings[plants[i * 2 + length * 2 + 1]]);
      this[students[i]].push(mappings[plants[i * 2 + length * 2 + 2]]);
    }
  }
}

module.exports = Garden;
