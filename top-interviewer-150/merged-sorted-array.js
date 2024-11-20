/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = (m + n); i >= 0; i--) {
        if (nums1[i] === 0 && i >= m) {
            nums1.splice(i, 1);
        }
        if (i < n) nums1.push(nums2[i]);
    }
    console.log(nums1);
    nums1.sort(function (a, b) {
        return a - b;
    });
    console.log(nums1);
};

merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3)