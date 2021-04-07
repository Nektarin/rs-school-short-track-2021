/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const arr = n.toString().split('');

  arr.forEach((value, index) => {
    const temp = arr.slice();
    temp.splice(index, 1);
    if (Number(temp.join('')) > max) {
      max = Number(temp.join(''));
    }
  });
  return max;
}

module.exports = deleteDigit;
