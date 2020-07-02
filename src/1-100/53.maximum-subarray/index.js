// 53. 最大子序和
// 数组、分治算法、动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 解法一
  var currentSum = nums[0], maxSum = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (currentSum > 0) {
      currentSum += nums[i];
    } else {
      currentSum = nums[i];
    }
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;

  // 解法二
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i - 1] > 0) {
  //     nums[i] += nums[i - 1];
  //   }
  // }
  // return Math.max(...nums);
};
