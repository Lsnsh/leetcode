// 88. 合并两个有序数组
// 数组、双指针
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  m--;
  n--;
  for (var i = nums1.length - 1; i >= 0; i--) {
    if (m < 0) {
      nums1.splice(0, n + 1, ...nums2.slice(0, n + 1));
      break;
    }
    if (n < 0) {
      break;
    }
    if (nums2[n] > nums1[m]) {
      nums1[i] = nums2[n];
      n--;
    } else {
      nums1[i] = nums1[m];
      m--;
    }
  }
};
