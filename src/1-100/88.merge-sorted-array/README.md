## 88. 合并两个有序数组

标签：`数组` `双指针`

给你两个有序整数数组 `nums1` 和 `nums2`，请你将 `nums2` 合并到 `nums1`  中，使 `nums1` 成为一个有序数组。

说明:

初始化 `nums1` 和 `nums2` 的元素数量分别为  `m` 和 `n` 。
你可以假设 `nums1`  有足够的空间（空间大小大于或等于  `m + n`）来保存 `nums2` 中的元素。

示例:

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

输出: [1,2,2,3,5,6]
```

> 来源：力扣（LeetCode）
> 链接：https://leetcode-cn.com/problems/merge-sorted-array
> 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 题解

双指针，从后往前遍历，每遍历一次确定一个数的位置

### 解法一

运行耗时：76 ms 内存消耗：32.4 MB

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 用参数 m 和 n，分别保存两个数组当前遍历到索引位置
  // 因为是数组长度，所以遍历前先减一
  m--;
  n--;
  // 遍历数组，每次遍历都能确定一个数的位置，最多遍历 nums1.length === m + n 次
  for (var i = nums1.length - 1; i >= 0; i--) {
    // 如果 nums1 数组已经遍历了 m 次，表示 nums1 数组中的非零整数的位置都已经确定了
    if (m < 0) {
      // nums1 和 nums2 两个数组遍历中交错取值，而 nums1 数组中的元素位置确定，表明 nums2 数组中剩余未遍历的元素都比 nums1 数组中最后一次遍历的元素要小
      // 于是直接将 nums2 数组中剩余未遍历的元素，从 nums1 数组开头位置按顺序添加，并删除 nums2 数组中原来的元素
      nums1.splice(0, n + 1, ...nums2.slice(0, n + 1));
      // 直接终止遍历即可
      break;
    }
    // 如果 nums2 数组已经遍历了 n 次，表示 nums2 数组中的元素位置都已经确定了
    if (n < 0) {
      // nums1 和 nums2 数组都是有序整数数组，nums2 数组中的元素位置确定，而且是从后往前修改 nums1 数组，表明 nums1 数组中剩余未遍历的元素，是有序且无需遍历，即 nums1 数组已经是组合完成并有序的了，直接终止遍历即可
      break;
    }
    // 倒序遍历，从大小到确定两个数组中的元素
    if (nums2[n] > nums1[m]) {
      // 将比较后更大的一方，从末尾开始保存在 nums1 数组中，每遍历一次确定一个数的位置
      nums1[i] = nums2[n];
      // 更新 nums2 数组下一个待检查元素的索引位置
      n--;
    } else {
      nums1[i] = nums1[m];
      m--;
    }
  }
};
```
