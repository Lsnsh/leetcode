// 66. 加一
// 数组
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var result = [], needPlusOne = true;
  for (var i = digits.length - 1; i >= 0; i--) {
    var num = digits[i];
    if (needPlusOne) {
      needPlusOne = false;
      num++;
      if (num >= 10) {
        needPlusOne = true;
        num -= 10;
      }
    }
    result.push(num);
  }
  result = result.reverse();
  if (result[0] === 0) {
    result.unshift(1);
  }
  return result;
};
