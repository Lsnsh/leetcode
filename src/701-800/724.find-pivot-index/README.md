## 724. 寻找数组的中心索引

标签：`数组`

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/find-pivot-index
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时：116 ms 内存消耗：40.6 MB

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 计算总和
  const sum = nums.reduce((currSum, num) => currSum + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // 由于具有中心索引的数组的元素总和 = 中心索引两侧元素的总和 + 中心索引所在元素的值
    // 不断推断当前索引，是否为中心索引
    if (leftSum * 2 + nums[i] === sum) {
      // 满足条件，返回中心索引
      return i;
    } else {
      // 否则从左侧开始累加数组元素的值
      leftSum += nums[i];
    }
  }
  return -1;
};
```
