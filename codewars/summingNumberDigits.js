function sumDigits(number) {
  let numString = number.toString().split('');
  let result = 0;
  for(let i = 0; i < numString.length; i++) {
    if(numString[i] != "-") {
      result += Number(numString[i]);
    }
  }
  
  return result;
}
