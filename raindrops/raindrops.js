class Raindrop {

  convert(n) {
    let res = '';
    if (!(n % 3)) res += 'Pling';
    if (!(n % 5)) res += 'Plang';
    if (!(n % 7)) res += 'Plong';

    return res || n.toString();
  }

}

module.exports = Raindrop;
