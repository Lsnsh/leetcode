## 1689. 面试题 01.08.零矩阵

标签：`数组`

编写一种算法，若 `M × N` 矩阵中某个元素为 `0`，则将其所在的**行与列清零**。

**示例 1：**

```
输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

**示例 2：**

```
输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/zero-matrix-lcci
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时: 128 ms 内存消耗: 39.3 MB

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let vd = {};
  for (let i = 0; i < matrix.length; i++) {
    let rowSetZero = false;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        // 保存并标记需要清零的列
        vd[j] = true;
        // 标记当前行需清零
        rowSetZero = true;
        // 将之前遍历过的列清零
        for (let k = 0; k < i; k++) {
          matrix[k][j] = 0;
        }
      } else {
        // 将列清零
        if (vd[j]) {
          matrix[i][j] = 0;
        }
      }
    }
    // 将行清零
    rowSetZero && matrix[i].fill(0);
  }
  return matrix;
};
```

#### 解法二

运行耗时: 104 ms 内存消耗: 39.5 MB

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = {},
    columns = {};
  // 遍历找到需要清零的行和列的索引
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }
  // 行清零
  for (let index in rows) {
    for (let i = 0; i < matrix[index].length; i++) {
      matrix[index][i] = 0;
    }
  }
  // 列清零
  for (let index in columns) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][index] = 0;
    }
  }
  return matrix;
};
```
