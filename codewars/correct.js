// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 5) {
      result += "S";
    } else if (string[i] == 0) {
      result += "O";
    } else if (string[i] == 1) {
      result += "I";
    } else {
      result += string[i];
    }
  }
  return result;
}
