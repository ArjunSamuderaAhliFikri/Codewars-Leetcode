// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascripts

function sumMul(n, m) {
  if (!n || !m || m < n) {
    return "INVALID";
  }

  let result = 0;

  for (let i = 1; i < m; i++) {
    const resultMultiple = n * i;

    if (resultMultiple >= m) {
      return result;
    } else {
      result += resultMultiple;
    }
  }

  return result;
}

console.log(sumMul(2, 9));
