## 3. 无重复字符的最长子串

标签：`哈希`、`双指针`、`字符串`、`Sliding Window`

给定一个字符串，请你找出其中不含有重复字符的**最长子串**的长度。

**示例  1:**

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是  "wke"，所以其长度为 3。
  请注意，你的答案必须是 子串 的长度，"pwke"  是一个子序列，不是子串。
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

#### 解法一

运行耗时: 476 ms 内存消耗: 14.9 MB

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = "",
    langStr = "";
  for (let i = 0; i < s.length; ++i) {
    str = s[i];
    for (let j = i + 1; j < s.length; ++j) {
      if (str.indexOf(s[j]) > -1) {
        j = s.length;
      } else {
        str += s[j];
      }
    }
    if (str.length > langStr.length) {
      langStr = str;
    }
  }
  return langStr.length;
};
```
