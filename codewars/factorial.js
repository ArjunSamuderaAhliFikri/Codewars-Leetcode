//www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError();
  }

  if (n == 0) {
    return 1;
  }

  let result = n;
  for (let i = n - 1; i >= 1; i--) {
    result = result * i;
  }

  return result;
}

console.log(factorial(1));
