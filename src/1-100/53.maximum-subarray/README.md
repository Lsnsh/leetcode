## 53. 最大子序和

标签：`数组` `分治算法` `动态规划`

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释:  连续子数组  [4,-1,2,1] 的和最大，为  6。
```

进阶:

如果你已经实现复杂度为 `O(n)` 的解法，尝试使用更为精妙的分治法求解。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/maximum-subarray
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

第一次做`动态规划`、`分治算法`标签相关的题目，真让人头大，硬着头皮看完默认排序前三的题解并试着写一遍后，渐渐明白了一些

### 解法一

运行耗时：76 ～ 92 ms 内存消耗：35 ~ 36 MB

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 定义变量记录，当前最大子序和（计算中-进行时）、最大子序和（计算完成-过去式）
  var currentSum = nums[0],
    maxSum = nums[0];
  // 遍历数组，从第一项开始，尝试计算最大子序和
  for (var i = 1; i < nums.length; i++) {
    // 当前最大子序和 currentSum，默认为第一项，
    if (currentSum > 0) {
      // 如果大于 0，表示 currentSum 对于后续计算最大子序和，具有增益效果 buff
      // 基于 currentSum，加上数组第 i 项，继续计算最大子序和
      currentSum += nums[i];
    } else {
      // 如果小于等于 0，表示 currentSum 对于后续计算最大子序和，具有减益效果 debuff 或者无效果
      // 于是基于数组第 i 项，重新开始计算当前最大子序和
      currentSum = nums[i];
    }
    // 每次循环结束前，比较并更新一下最大子序和 maxSum
    maxSum = Math.max(currentSum, maxSum);
  }
  // 返回最大子序和
  return maxSum;
};
```

上面的题解写完后，看了看目前运行耗时（36ms）最少的范例，可能是因为 leetcode 测试用例更新或者其他原因导致运行耗时出入比较大，但是觉得代码挺有意思，于是记录了下来：

### 解法二

运行耗时：72 ～ 92 ms 内存消耗：35.2 ~ 35.8 MB

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 遍历数组，不单独定义变量，使用数组元素保存不断变化的最大子序和
  for (let i = 1; i < nums.length; i++) {
    // 从第 i 项开始，判断第 i - 1 项是否大于 0
    if (nums[i - 1] > 0) {
      // 如果第 i - 1 项大于 0，表示具有增益效果，累加第 i - 1 项
      // 累加的第 i 项，相当于是当前的最大子序和，后续累加会基于当前最大子序和的基础上累加
      nums[i] += nums[i - 1];
    }
    // 如果不满足，即第 i - 1 项小于等于 0，表示具有减益效果，直接跳过
  }
  // 取出并返回最大子序和（eg: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] => [-2, 1, -2, 4, 3, 5, 6, 1, 5]）
  return Math.max(...nums);
};
```
