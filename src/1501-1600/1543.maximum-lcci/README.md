## 面试题 16.07. 最大数值

标签：`位运算`、`数学`

编写一个方法，找出两个数字 a 和 b 中最大的那一个。不得使用 if-else 或其他比较运算符。

**示例：**

```
输入： a = 1, b = 2
输出： 2
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/maximum-lcci/
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时: 56 ms 内存消耗: 33.6 MB

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function (a, b) {
  return Math.max(a, b);
};
```
