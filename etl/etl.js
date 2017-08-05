class ETL {

  transform(map) {
    let res = {};
    for (let i in map) {
      for (let x of map[i]) {
        res[x.toLowerCase()] = Number(i);
      }
    }
    return res;
  }
}

module.exports = ETL;
