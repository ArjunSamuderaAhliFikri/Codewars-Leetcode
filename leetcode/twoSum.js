// https://leetcode.com/problems/two-sum/
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (j == i) {
        j += 1;
      }
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}
