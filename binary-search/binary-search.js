function bSearch(arr, n, start, end) {
  if (start === end) return -1;
  let i = Math.floor((start + end) / 2);
  if (arr[i] === n) return i;
  if (arr[i] > n) return bSearch(arr, n, start, i);
  if (arr[i] < n) return bSearch(arr, n, i + 1, end);
}

class BinarySearch {

  constructor(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return;
    }
    this.array = arr;
  }

  indexOf(n) {
    return this.array && bSearch(this.array, n, 0, this.array.length);
  }
}

module.exports = BinarySearch;
