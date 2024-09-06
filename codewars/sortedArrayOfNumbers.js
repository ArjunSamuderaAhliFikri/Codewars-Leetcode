// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
function solution(nums) {
  if (nums == null || nums == []) {
    return [];
  }
  let newNums = nums;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (newNums[j] > newNums[j + 1]) {
        var currentNumber = nums[j];
        newNums[j] = newNums[j + 1];
        newNums[j + 1] = currentNumber;
      }
    }
  }
  return newNums;
}

console.log(solution([1, 2, 3, 10, 5]));
