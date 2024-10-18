//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

function pipeFix(numbers) {
  let result = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    result.push(i);
  }
  return result;
}
