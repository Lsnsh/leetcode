/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  var resultNums = [];
  // 反向遍历
  for (var i = nums.length - 1; i >= 0; i--) {
    if (resultNums.length === 2) {
      return resultNums;
    }
    // 从正向取，相同数字的元素的索引值
    var firstSameNumIndex = nums.indexOf(nums[i]);
    // console.log(nums[i] + ' : ', firstSameNumIndex, i);
    // 如果该相同元素的索引值等于i，表示该元素只出现一次
    if (firstSameNumIndex === i) {
      // 将该元素保存
      resultNums.push(nums[i]);
    } else if (firstSameNumIndex > -1) {
      // 否则删除该相同元素
      nums.splice(firstSameNumIndex, 1);
      // 同时累减i
      i--;
    }
  }
  // 返回结果数组
  return resultNums;
};
