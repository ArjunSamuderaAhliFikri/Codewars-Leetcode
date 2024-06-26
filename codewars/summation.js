// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += num - i;
  }
  return result;
};
