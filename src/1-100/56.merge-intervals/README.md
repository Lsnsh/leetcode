## 56. 合并区间

标签：`排序` `数组`

给出一个区间的集合，请合并所有重叠的区间。

**示例 1:**

```
输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例  2:**

```
输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

**注意：**输入类型已于 2019 年 4 月 15 日更改。 请重置默认代码定义以获取新方法签名。

**提示：**

- `intervals[i][0] <= intervals[i][1]`

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/merge-intervals
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

根据二维数组索引位置 0 的元素，升序排列原数组；遍历数组，逐个判断区间是否存在重叠部分，处理后的区间，存放到新数组中

运行耗时: 120 ms 内存消耗: 38.7 MB

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (i < intervals.length - 1 && interval[1] >= intervals[i + 1][0]) {
      intervals[i + 1][0] = interval[0];
      if (interval[1] > intervals[i + 1][1]) {
        intervals[i + 1][1] = interval[1];
      }
    } else {
      result.push(interval);
    }
  }
  return result;
};
```

#### 解法二

同样是先升序排列、遍历，然后判断并处理存在重叠情况的区间，处理后的区间做标记，遍历完后将标记的元素过滤，不开辟新的数组

运行耗时: 92 ms 内存消耗: 38.8 MB

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i <= intervals.length - 1; i++) {
    if (i < intervals.length - 1 && intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i + 1][0] = intervals[i][0];
      if (intervals[i][1] > intervals[i + 1][1]) {
        intervals[i + 1][1] = intervals[i][1];
      }
      intervals[i] = null;
    }
  }
  intervals = intervals.filter((item) => !!item);
  return intervals;
};
```
