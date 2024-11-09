// https://leetcode.com/problems/filter-elements-from-array/submissions/1447297353/?envType=study-plan-v2&envId=30-days-of-javascript

function filter(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
}

// if with typescript
// type Fn = (n: number, i: number) => any

// function filter(arr: number[], fn: Fn): number[] {
//     const result: number[] = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(fn(arr[i], i)) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// };
