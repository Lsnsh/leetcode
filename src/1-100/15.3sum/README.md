## 15. 三数之和

标签：`数组` `双指针`

给你一个包含 `n` 个整数的数组  `nums`，判断  `nums`  中是否存在三个元素 `a，b，c` ，使得  `a + b + c = 0` ？请你找出所有满足条件且不重复的三元组。

**注意：** 答案中不可以包含重复的三元组。

**示例：**

```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
[-1, 0, 1],
[-1, -1, 2]
]
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/3sum
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

三数之和，首先明确三个位置上的数的起始位置、结束位置、移动轨迹：

- 位置一：外层 for 循环，从左往右遍历到末尾的数 nums[i]
- 位置二：内层 while 循环，起始位置为 second = i + 1，从左往右移动到位置三之前一位的数 nums[second]
- 位置三：内层 while 循环，起始位置在数组末尾 third = nums.length - 1，从右往左移动到位置二之后一位的数 nums[third]

**注意点：** 三数之和，结果去重

**优化点：**

- 如果遍历到位置一的数大于 0 时，可以终止循环了（因为位置二、位置三的数比位置一更大，相加自然会等于 0）
- 三数之和大于或者小于 0 时，可以进行去重

#### 解法一

运行耗时：144 ms 内存消耗：46.4 MB

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 数组排序
  nums = nums.sort((a, b) => a - b);
  var result = [];
  // 遍历数组，数组元素的位置记作位置一
  for (var i = 0; i < nums.length - 2; i++) {
    // 数组从小到大排列，如果当前数组元素大于零，则与后续元素相加必然大于零，提前终止循环
    if (nums[i] > 0) {
      break;
    }
    // 检查是否遍历过位置一上的元素，进行去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 位置二（位置一之后，默认在相邻位置，会从左往右移动）
    var second = i + 1;
    // 位置三（位置二之后，默认在数组末尾，会从右往左移动）
    var third = nums.length - 1;
    // 遍历数组，每遍历一次，固定位置一的数组元素
    // 然后使用 while 循环，不断计算三个位置的和，根据计算结果移动位置二和位置三的数，直到位置二和位置三重合，即 second === third
    while (second < third) {
      var sum = nums[i] + nums[second] + nums[third];
      if (sum === 0) {
        result.push([nums[i], nums[second], nums[third]]);
        // 将满足条件的，位置二和位置三上的元素，进行去重，避免结果数组中存在重复的子数组
        while (second < third && nums[second] === nums[second + 1]) {
          second++;
        }
        while (second < third && nums[third] === nums[third - 1]) {
          third--;
        }
        // 满足条件后，位置二向右移动一位，位置三向左移动一位，继续检索
        second++;
        third--;
      } else if (sum < 0) {
        // 位置二的元素去重
        while (second < third && nums[second] === nums[second + 1]) {
          second++;
        }
        // 如果 sum 小于零，需要将位置二向右移动，使 sum 的值变得更大，直到等于零
        second++;
      } else {
        // 位置三的元素去重
        while (second < third && nums[third] === nums[third - 1]) {
          third--;
        }
        // 如果 sum 大于零，需要将位置三向左移动，使 sum 的值变得更小，直到等于零
        third--;
      }
    }
  }
  return result;
};
```
