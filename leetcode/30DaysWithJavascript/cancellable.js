// https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript

function cancellable(fn, args, t) {
  let timer = setTimeout(() => {
    fn(...args);
  }, t);

  return function () {
    clearTimeout(timer);
  };
}
