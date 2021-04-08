/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const hexadecimalArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const arr = n.split('-').join('').split('');

  if (arr.length !== 12) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!hexadecimalArray.includes(arr[i])) {
      return false;
    }
  }

  return true;
}

module.exports = isMAC48Address;
