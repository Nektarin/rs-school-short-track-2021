/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  const arr = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index + 1] !== array[index]) {
      arr.push(array[index]);
    } else {
      let i = index + 1;
      let n = 2;
      while (array[i] === array[i + 1]) {
        n++;
        i++;
      }
      arr.push(n + array[index]);
      index = i;
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
