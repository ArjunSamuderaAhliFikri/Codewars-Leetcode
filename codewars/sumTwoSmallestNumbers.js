// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function sumTwoSmallestNumbers(numbers) {
  let firstNum = numbers[0];
  let result = [];
  const findNumbers = Math.floor(
    numbers.reduce((acc, curr) => (acc += curr), 0) / numbers.length
  );
  for(let i = 1; i < numbers.length i++) {
    if(result.length >= 2) {
        return result.reduce((acc, curr) =>acc+= curr ,0).join('');
    }
    if(firstNum > numbers[i]) {
        return numbers[i];
    }
  }
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
