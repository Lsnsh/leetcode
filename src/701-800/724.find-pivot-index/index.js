// 724. 寻找数组的中心索引
// 数组
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((currSum, num) => currSum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum * 2 + nums[i] === sum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};
