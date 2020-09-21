## 14. 最长公共前缀

标签：`字符串`

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串  `""`。

**示例  1:**

```
输入: ["flower","flow","flight"]
输出: "fl"
```

**示例  2:**

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**

所有输入只包含小写字母  `a-z` 。

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/longest-common-prefix
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时: 96 ms 内存消耗: 39.6 MB

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 边界情况
  if (strs.indexOf("") >= 0) {
    return "";
  }
  // 默认第一个字符串为公共前缀
  let publicPrefix = strs[0] || "";
  // 往后遍历
  for (let i = 1; i < strs.length; i++) {
    let newPublicPrefix = "";
    for (let j = 0; j < strs[i].length; j++) {
      // 逐个字符比较，找到新的公共前缀
      if (strs[i][j] === publicPrefix[j]) {
        newPublicPrefix += strs[i][j];
      } else {
        break;
      }
    }
    // 更新公共前缀
    publicPrefix = newPublicPrefix;
    // 边界情况
    if (!publicPrefix) {
      return publicPrefix;
    }
  }
  return publicPrefix;
};
```
