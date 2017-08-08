module.exports = (list, cb) => list.reduce((acc, x) => acc.concat([cb(x)]), []);
