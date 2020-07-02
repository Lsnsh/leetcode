## 66. 加一

标签：`数组`

给定一个由**整数**组成的**非空**数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例  1:

```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```

示例  2:

```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/plus-one
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

运行耗时：64 ～ 96 ms 内存消耗：32.1 ~ 32.6 MB

### 解法一

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var result = [];
  // 定义变量标记新一轮遍历时是否要加/进一，默认第一轮要加一
  var needPlusOne = true;
  // 倒序遍历数组
  for (var i = digits.length - 1; i >= 0; i--) {
    var num = digits[i];
    if (needPlusOne) {
      needPlusOne = false;
      // 给当前第 i 项元素加一
      num++;
      if (num >= 10) {
        // 如果大于 10，需要往前进一位，更新 needPlusOne 状态
        needPlusOne = true;
        // 标记为需要进一位后，减去 10 取个位数表示第 i 项的新值
        num -= 10;
      }
    }
    // 将加一或者进一位减去 10 后的元素保存
    result.push(num);
  }
  // 将新数组的顺序逆转
  result = result.reverse();
  if (result[0] === 0) {
    // 如果数组第 0 项为 0，表示第 0 项需要进一位，于是在数组前插入数字 1
    result.unshift(1);
  }
  return result;
};
```
