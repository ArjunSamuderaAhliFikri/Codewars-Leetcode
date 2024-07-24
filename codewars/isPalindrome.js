// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
function isPalindrome(x) {
  let xReverse = x.split("").reverse().join("");
  if (!x) {
    return true;
  } else {
    return x.toLowerCase() == xReverse.toLowerCase() ? true : false;
  }
}
