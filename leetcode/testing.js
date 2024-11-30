// experiment!
function merge(nums1, m, nums2, n) {
  const filterNums = nums1.filter((num) => num !== 0);
  const contactBetweenFilter = filterNums.concat(nums2);
  return contactBetweenFilter.sort();
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
