// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

function stringClean(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (typeof parseInt(s[i]) !== "number" || isNaN(parseInt(s[i]))) {
      result += s[i];
    }
  }
  return result;
}
