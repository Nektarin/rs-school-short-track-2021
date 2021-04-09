/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let range = Math.floor(array.length / 2);
  while (array[range] !== value) {
    if (array[range] > value) {
      range = Math.floor(range / 2);
    } else {
      range = Math.floor((array.length + range) / 2);
    }
  }

  return range;
}

module.exports = findIndex;
