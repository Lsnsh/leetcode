## 118. 杨辉三角

标签：`数组`

给定一个非负整数  `numRows`，生成杨辉三角的前  `numRows`  行。

![杨辉三角](./1.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/pascals-triangle
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

- 双层循环，外层循环的索引位置，影响内层循环遍历的次数；
- 外层循环插入数组，内层循环插入数字
- 内层循环开始和结束位置都是插入数字 1
- 内层循环其他位置插入的数字，由上一行数组中的数字计算决定

#### 解法一

运行耗时: 68 ms 内存消耗: 32.1 MB

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [];
  // 遍历行数
  for (var i = 0; i < numRows; i++) {
    // 定义变量存放第 i 行的数字
    var resultRow = [];
    // 遍历生成数字（第一行一个数，第二行两个数，第三行三个数）
    for (var j = 0; j < i + 1; j++) {
      // 判断当前位置是否为当前行的开头或结尾
      if (j === 0 || j === i) {
        // 一行中的开头和结尾位置的数都是 1
        resultRow.push(1);
      } else {
        var lastResultRow = result[i - 1];
        // 剩余位置的数字，根据上一行数组中数计算得出
        resultRow.push(lastResultRow[j - 1] + lastResultRow[j]);
      }
    }
    // 每生成完一行数组，都将其插入到结果数组末尾
    result.push(resultRow);
  }
  return result;
};
```
