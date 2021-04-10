/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const set = new Set();
  let str = '';
  const obj = {};

  domains.forEach((item) => {
    const arr = item.split('.');
    arr.reverse();
    let conc = `.${arr[0]}`;
    set.add(conc);
    str += `${conc} `;
    for (let index = 0; index < arr.length - 1; index++) {
      conc += `.${arr[index + 1]}`;
      str += `${conc} `;
      set.add(conc);
    }
  });

  const array = str.trim().split(' ');

  set.forEach((value) => {
    let n = 0;
    array.forEach((item) => {
      if (value === item) {
        n++;
      }
    });
    obj[`${value}`] = n;
  });

  return obj;
}

module.exports = getDNSStats;
