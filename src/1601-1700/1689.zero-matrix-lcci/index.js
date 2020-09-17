// 1689. 面试题01.08.零矩阵
// 数组
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let vd = {};
  for (let i = 0; i < matrix.length; i++) {
    let rowSetZero = false;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        vd[j] = true;
        rowSetZero = true;
        for (let k = 0; k < i; k++) {
          matrix[k][j] = 0;
        }
      } else {
        if (vd[j]) {
          matrix[i][j] = 0;
        }
      }
    }
    rowSetZero && matrix[i].fill(0);
  }
  return matrix;
};


// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var setZeroes = function (matrix) {
//   let rows = {}, columns = {};
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 0) {
//         rows[i] = true;
//         columns[j] = true;
//       }
//     }
//   }
//   for (let index in rows) {
//     for (let i = 0; i < matrix[index].length; i++) {
//       matrix[index][i] = 0;
//     }
//   }
//   for (let index in columns) {
//     for (let i = 0; i < matrix.length; i++) {
//       matrix[i][index] = 0;
//     }
//   }
//   return matrix;
// };

console.log(setZeroes([
  [1, 1, 1],
  [1, 1, 0],
  [1, 1, 1]
]));
// [
//   [1, 1, 0],
//   [0, 0, 0],
//   [1, 1, 0]
// ]

console.log(setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
]));
// [
//   [0, 0, 0, 0],
//   [0, 4, 5, 0],
//   [0, 3, 1, 0]
// ]
