// 11. 盛最多水的容器
// 数组、双指针
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var result = 0;
  for (var i = 0; i < height.length; i++) {
    for (var j = i + 1; j < height.length; j++) {
      var w = j - i;
      var h = height[i] < height[j] ? height[i] : height[j];
      if (w * h > result) {
        result = w * h;
      }
    }
  }
  return result;
};
