// https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

function createCounter(n) {
  return function () {
    return n++;
  };
}
