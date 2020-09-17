## 1688. 面试题 01.07.旋转矩阵

标签：`数组`

给你一幅由 `N × N` 矩阵表示的图像，其中每个像素的大小为 `4` 字节。请你设计一种算法，将图像旋转 `90` 度。

不占用额外内存空间能否做到？

**示例 1:**

```
给定 matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**示例 2:**

```
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/rotate-matrix-lcci
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时: 88 ms 内存消耗: 39.3 MB

```javascript
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 沿主对角线翻转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      // 解构赋值的方式，交换元素的值
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 沿中线翻转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0, len = matrix[i].length; j < len / 2; j++) {
      [matrix[i][j], matrix[i][len - 1 - j]] = [
        matrix[i][len - 1 - j],
        matrix[i][j],
      ];
    }
  }
  return matrix;
};
```
