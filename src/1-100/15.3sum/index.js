// 15. 三数之和
// 数组、双指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  var result = [];
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    var second = i + 1;
    var third = nums.length - 1;
    while (second < third) {
      var sum = nums[i] + nums[second] + nums[third];
      if (sum === 0) {
        result.push([nums[i], nums[second], nums[third]]);
        while (second < third && nums[second] === nums[second + 1]) {
          second++;
        }
        while (second < third && nums[third] === nums[third - 1]) {
          third--;
        }
        second++;
        third--;
      } else if (sum < 0) {
        while (second < third && nums[second] === nums[second + 1]) {
          second++;
        }
        second++;
      } else {
        while (second < third && nums[third] === nums[third - 1]) {
          third--;
        }
        third--;
      }
    }
  }
  return result;
};
