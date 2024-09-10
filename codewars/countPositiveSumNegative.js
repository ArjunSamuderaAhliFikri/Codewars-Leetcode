// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
  if (input == null) {
    return [];
  }
  let isPositive = 0;
  let sumNegativeNumbers = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      isPositive = isPositive + 1;
    } else if (input[i] < 0) {
      sumNegativeNumbers = sumNegativeNumbers + input[i];
    }
  }

  if (input.length == 0) {
    return [];
  } else {
    return [isPositive, sumNegativeNumbers];
  }
}

console.log(countPositivesSumNegatives([]));
