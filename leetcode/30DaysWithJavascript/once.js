function once(fn) {
  var called = false;
  return function (...args) {
    if (!called) {
      called = true;
      let result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  };
}

const setFunc = once((a, b, c) => a + b + c);

const result = setFunc(1, 2, 3);
const resultTwo = setFunc(4, 5, 6);

console.log(result);
console.log(resultTwo);
