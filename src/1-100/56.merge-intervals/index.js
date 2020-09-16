// 56. 合并区间
// 排序、数组
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (i < intervals.length - 1 && interval[1] >= intervals[i + 1][0]) {
      intervals[i + 1][0] = interval[0];
      if (interval[1] > intervals[i + 1][1]) {
        intervals[i + 1][1] = interval[1];
      }
    } else {
      result.push(interval);
    }
  }
  return result;
};

// 解法二

// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function (intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i <= intervals.length - 1; i++) {
//     if (i < intervals.length - 1 && intervals[i][1] >= intervals[i + 1][0]) {
//       intervals[i + 1][0] = intervals[i][0];
//       if (intervals[i][1] > intervals[i + 1][1]) {
//         intervals[i + 1][1] = intervals[i][1];
//       }
//       intervals[i] = null;
//     }
//   }
//   intervals = intervals.filter(item => !!item);
//   return intervals;
// };

// 测试用例

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
// console.log(merge([[1, 1], [2, 6]]));

// console.log(merge([[1, 7], [2, 6]]));
// console.log(merge([[1, 7], [1, 8]]));
// console.log(merge([[1, 7]]));

// console.log(merge([[1, 1], [1, 2], [2, 3], [3, 5]]));
// console.log(merge([[1, 1], [1, 2], [2, 3], [4, 5]]));
// console.log(merge([[1, 1], [1, 2], [2, 3], [4, 5], [5, 6], [7, 8], [8, 9], [9, 9], [1, 10]]));

// [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
// [ [ 1, 1 ], [ 2, 6 ] ]
// [ [ 1, 7 ] ]
// [ [ 1, 8 ] ]
// [ [ 1, 7 ] ]
// [ [ 1, 5 ] ]
// [ [ 1, 3 ], [ 4, 5 ] ]
// [ [ 1, 10 ] ]
