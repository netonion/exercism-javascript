const items = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

class Allergies {

  constructor(score) {
    this.allergies = items.reduce((acc, x, i) => score & (1 << i) ? acc.concat([x]) : acc, []);
  }

  list() {
    return this.allergies;
  }

  allergicTo(item) {
    return this.allergies.includes(item);
  }
}

module.exports = Allergies;
