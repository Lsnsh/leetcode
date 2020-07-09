## 119. 杨辉三角 II

标签：`数组`

给定一个非负索引  `k`，其中 `k ≤ 33`，返回杨辉三角的第 `k` 行。

![杨辉三角II](./../118.pascals-triangle/1.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例:**

```
输入: 3
输出: [1,3,3,1]
```

**进阶：**

你可以优化你的算法到 `O(k)` 空间复杂度吗？

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/pascals-triangle-ii
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时：76 ms 内存消耗：36.1 MB

```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  var result = [];
  for (var i = 0; i <= rowIndex; i++) {
    var resultRow = [];
    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        resultRow.push(1);
      } else {
        var lastResultRow = result[i - 1];
        resultRow.push(lastResultRow[j - 1] + lastResultRow[j]);
      }
    }
    result.push(resultRow);
  }
  return result[rowIndex];
};
```
