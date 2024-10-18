//https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript

// type Counter = {
//   increment: () => number,
//   decrement: () => number,
//   reset: () => number,
// };

function createCounter(init) {
  var newNum = init;
  return {
    increment: () => {
      return ++newNum;
    },

    reset: () => {
      return (newNum = init);
    },

    decrement: () => {
      return --newNum;
    },
  };
}
