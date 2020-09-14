// 3. 无重复字符的最长子串
// 哈希、双指针、字符串、Sliding Window
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
