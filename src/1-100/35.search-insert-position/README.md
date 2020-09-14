## 35. 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

```
输入: [1,3,5,6], 5
输出: 2
```

示例  2:

```
输入: [1,3,5,6], 2
输出: 1
```

示例 3:

```
输入: [1,3,5,6], 7
输出: 4
```

示例 4:

```
输入: [1,3,5,6], 0
输出: 0
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

刚做完双指针的题目(26。27)，写出了下面的题解：

### 解法一

运行耗时: 64 ～ 72 ms 内存消耗: 33 ~ 33.2 MB

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 边界情况处理，如果 target 小于数组第一项，直接返回 0
  if (target < nums[0]) return 0;
  // 如果 target 大于数组最后一项，返回数字最后一项加 1，即 nums.length
  if (target > nums[nums.length - 1]) return nums.length;
  var insertIndex = 0; // 定义变量，用于保存 target 可插入的索引位置
  for (var i = 0; i < nums.length; i++) {
    // 遍历途中，如果元素与 target 相等，直接终止循环，返回 i
    if (target === nums[i]) {
      return i;
    }
    // 否则持续比较 target 是否大于数组中的元素 nums[i]
    if (target > nums[i]) {
      // 如果大于，将 insertIndex 累加，更新 target 可插入的索引位置
      insertIndex++;
    } else {
      // 如果小于，表示已经到达 target 可插入的索引位置，直接返回 insertIndex 或 i 即可
      return insertIndex;
    }
  }
  // 循环终止后，函数还未结束执行，表示 target 大于 nums[nums.length - 1]，直接返回 insertIndex 即可
  return insertIndex;
};
```

---

上面这个题解中的边界情况处理是写完之后，参考了[@apologize-7](https://leetcode-cn.com/u/apologize-7/) 发布的[题解](https://leetcode-cn.com/problems/search-insert-position/solution/cai-niao-jie-ti-bu-xi-wu-pen-by-apologize-7/)，做出了修改的

另一种写法，我觉得也很有意思，基于 [@apologize-7](https://leetcode-cn.com/u/apologize-7/) 题解微调了一下：

### 解法二

运行耗时: 76 ms 内存消耗: 33.3 MB

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  for (var i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
    // 数组遍历时，根据题目要求，模拟将 target 插入到第 i 和 i + 1 项之间
    if (target > nums[i] && target < nums[i + 1]) {
      // 如果 target 大于第 i 项，并且小于第 i + 1 项时，表示符合插入条件，返回将要插入的索引位置即 i + 1
      return i + 1;
    }
  }
};
```

同样的代码，跑出来的耗时可能不一样（原题解耗时 60ms），内存消耗倒是基本一样，不知道是不是因为服务器性能限制或者网络问题导致的，有点纳闷
