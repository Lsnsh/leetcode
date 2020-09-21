// 14. 最长公共前缀
// 字符串
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.indexOf('') >= 0) {
    return '';
  }
  let publicPrefix = strs[0] || '';
  for (let i = 1; i < strs.length; i++) {
    let newPublicPrefix = '';
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === publicPrefix[j]) {
        newPublicPrefix += strs[i][j];
      } else {
        break;
      }
    }
    publicPrefix = newPublicPrefix;
    if (!publicPrefix) {
      return publicPrefix;
    }
  }
  return publicPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// fl
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
//
console.log(longestCommonPrefix(["flower"]));
// flower
console.log(longestCommonPrefix(["aa", "a"]));
// a
console.log(longestCommonPrefix(["aaa", "aa", "a", ""]));
//

