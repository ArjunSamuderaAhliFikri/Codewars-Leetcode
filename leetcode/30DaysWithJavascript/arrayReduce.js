// https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

// with vanilla javascript
function reduce(nums, fn, init) {
  let result = 0;
  if (!nums.length) {
    return init;
  }

  for (let i = 0; i < nums.length; i++) {
    let count = fn(init, nums[i]);
    result = count;
    init = count;
  }

  return result;
}

// with typescript
// type Fn = (accum: number, curr: number) => number

// function reduce(nums: number[], fn: Fn, init: number): number {
//     let result = 0;
//     let setInit = init;
//     if(!nums.length) {
//         return init;
//     }

//     for(let i = 0; i < nums.length; i++) {
//         let count = fn(init, nums[i]);
//         result = count;
//         init = count;
//     }

//     return result;
// };
