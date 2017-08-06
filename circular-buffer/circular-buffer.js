function circularBuffer(size) {

  let buffer = [];

  return {

    read() {
      if (buffer.length === 0) throw bufferEmptyException();
      return buffer.shift();
    },

    write(value) {
      if (buffer.length >= size) throw bufferFullException()
      if (value) buffer.push(value);
    },

    forceWrite(value) {
      while (buffer.length >= size) { buffer.shift(); }
      buffer.push(value);
    },

    clear() {
      buffer = [];
    }

  }
}

function bufferEmptyException() { return new Error('Buffer empty.'); }
function bufferFullException() { return new Error('Buffer full.'); }

exports.circularBuffer = circularBuffer;
exports.bufferEmptyException = bufferEmptyException;
exports.bufferFullException = bufferFullException;
