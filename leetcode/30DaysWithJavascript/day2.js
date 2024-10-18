//https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

// type ToBeOrNotToBe = {
//   toBe: (val: any) => boolean,
//   notToBe: (val: any) => boolean,
// };

function expect(val) {
  return {
    toBe: function (newValue) {
      if (newValue === val) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (newValue) {
      if (newValue === val) {
        throw new Error("Equal");
      } else {
        return true;
      }
    },
  };
}

console.log(expect(5).toBe(2));
