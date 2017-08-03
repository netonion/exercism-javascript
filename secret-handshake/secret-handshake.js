function SecretHandshake(code) {
  if (typeof code !== 'number') throw new Error('Handshake must be a number');
  this.code = code;
}

SecretHandshake.prototype.commands = function() {
  let commands = [];
  if (this.code & 1) commands.push('wink');
  if (this.code & 2) commands.push('double blink');
  if (this.code & 4) commands.push('close your eyes');
  if (this.code & 8) commands.push('jump');
  if (this.code & 16) commands.reverse();
  return commands;
};

module.exports = SecretHandshake;
