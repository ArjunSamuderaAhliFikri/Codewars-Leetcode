// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum(a, b) {
  let result = 0;
  if (a == b) {
    return a;
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      result += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      result += i;
    }
  }
  return result;
}

// unit case

const result = getSum(0, -1);
console.log(result);
