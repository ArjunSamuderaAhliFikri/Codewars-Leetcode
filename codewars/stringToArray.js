// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
// bar bar version

function stringToArray(string) {
  let result = [];
  let setText = "";
  for (let i = 0; i <= string.length; i++) {
    if (string[i] == " " || i == string.length) {
      result.push(setText);
      setText = "";
    } else {
      setText += string[i];
    }
  }
  return result;
}

// simply version

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("arjun samudera"));
