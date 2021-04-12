/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i].slice());
  }

  arr.map((item) => {
    item.push(false);
    item.unshift(false);
    return item;
  });

  arr.unshift(new Array(arr[0].length).fill(false, 0, arr[0].length));
  arr.push(new Array(arr[0].length).fill(false, 0, arr[0].length));

  const arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    arrCopy.push(arr[i].slice());
  }
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      let counter = 0;
      for (let index = j - 1; index < 3; index++) {
        if (arrCopy[i - 1][index] === true) {
          counter++;
        }
        if (arrCopy[i + 1][index] === true) {
          counter++;
        }
      }
      if (arrCopy[i][j + 1] === true) {
        counter++;
      }
      if (arrCopy[i][j - 1] === true) {
        counter++;
      }
      arr[i][j] = counter;
    }
  }
  arr.pop();
  arr.shift();
  arr.map((item) => {
    item.pop();
    item.shift();
    return item;
  });
  return arr;
}

module.exports = minesweeper;
