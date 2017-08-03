function WordProblem(q) {
  this.q = q;
}

WordProblem.prototype.answer = function() {
  if (!/^What is -?\d+( (plus|minus|multiplied by|divided by) -?\d+)+\?$/.test(this.q))
    throw new ArgumentError();

  let q = this.q;
  let result;
  do {
    q = q.replace(/(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/, (_, a, op, b) => {
      switch(op) {
        case 'plus'         : result = Number(a) + Number(b); break;
        case 'minus'        : result = Number(a) - Number(b); break;
        case 'multiplied by': result = Number(a) * Number(b); break;
        case 'divided by'   : result = Number(a) / Number(b); break;
      }
      return result.toString();
    });
  } while (/plus|minus|multiplied by|divided by/.test(q));

  return result;
};

function ArgumentError() {}

module.exports = {WordProblem, ArgumentError};
