// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0) {
    return flower2 % 2 == 1 ? true : false;
  } else if (flower1 % 2 == 1) {
    return flower2 % 2 == 0 ? true : false;
  } else {
    return false;
  }
}
