function parse(str) {
  return str.match(/[A-Z](?=[a-z])|\b\w/g).join("").toUpperCase();
}

exports.parse = parse;
