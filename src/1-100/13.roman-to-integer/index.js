// 13. 罗马数字转整数
// 数学、字符串
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  },
    num = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    let val = s[i],
      nextVal = s[i - 1];
    if (map[nextVal + val] !== undefined) {
      i--;
      num += map[nextVal + val];
    } else {
      num += map[val];
    }
  }
  return num;
};
