// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

// with vanilla javascript
function map(arr, fn) {
  return arr.map((num, i) => fn(num, i));
}

// *with typescript*
// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
//     return arr.map((num, i) => fn(num, i));
//   };
