// 118. 杨辉三角
// 数组
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var result = [];
  for (var i = 0; i < numRows; i++) {
    var resultRow = [];
    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        resultRow.push(1);
      } else {
        var lastResultRow = result[i - 1];
        resultRow.push(lastResultRow[j - 1] + lastResultRow[j])
      }
    }
    result.push(resultRow);
  }
  return result;
};
