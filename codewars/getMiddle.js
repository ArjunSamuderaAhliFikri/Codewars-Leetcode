// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  if (s.length <= 1) {
    return s;
  }
  if (s.length % 2 == 0) {
    return [...s].slice(s.length / 2 - 1, s.length / 2 + 1).join("");
  } else {
    return s[Math.floor([...s].length / 2)];
  }
}

console.log(getMiddle("GetMiddle"));
