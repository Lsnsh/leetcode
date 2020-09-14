## 剑指 Offer 56 - I. 数组中数字出现的次数

一个整型数组 `nums` 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是 `O(n)`，空间复杂度是 `O(1)`。

**示例 1：**

```
输入：nums = [4,1,4,6]
输出：[1,6] 或 [6,1]
```

**示例 2：**

```
输入：nums = [1,2,10,4,1,4,3,3]
输出：[2,10] 或 [10,2]
```

**限制：**

- `2 <= nums.length <= 10000`

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时: 56 ms 内存消耗: 33.6 MB

```javascript
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
```
