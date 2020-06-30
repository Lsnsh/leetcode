/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    // 72 ms	35 MB
    var result = [nums[0]];
    for (var i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] + nums[i];
    }
    return result;

    // 92 ms	35.2 MB
    // for (var i = 1; i < nums.length; i++) {
    //   nums[i] = nums[i - 1] + nums[i];
    // }
    // return nums;
};