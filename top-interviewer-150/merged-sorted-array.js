/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let length = m + n
    let removed = false;
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (i < n) nums1.push(nums2[i]);
    }
    
    for (let i = 0; i < length; i++) {
        if (removed) {
            if (nums1[i-count] === 0) {
                nums1.splice(i-count,1);
                count++;
            }
        } else {
            if (nums1[i] === 0) {
                nums1.splice(i,1);
                removed = true;
                count++;
            }   
        }
    }
    
    nums1.sort();
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)