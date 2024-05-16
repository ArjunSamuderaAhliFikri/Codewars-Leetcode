const findMaxNumber = (numbers) => {
  let finalResult = [];
  let currentNumber = finalResult[0];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] == "string") {
      finalResult.push(parseInt(numbers[i]));
    } else {
      finalResult.push(numbers[i]);
    }
  }

  if (finalResult.includes(NaN)) {
    return NaN;
  } else {
    for (let j = 1; j < finalResult.length; j++) {
      if (finalResult[j] > currentNumber) {
        currentNumber = finalResult[j];
      }
    }
  }

  return finalResult.sort((a, b) => a - b);
};

console.log(findMaxNumber([1, 2, 3, 8, 4, 9, 7, 42, 99]));

const say = "hello world";
console.log(parseInt(say));
