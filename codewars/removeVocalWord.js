function findI(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "a" ||
      string[i] == "A" ||
      string[i] == "i" ||
      string[i] == "I" ||
      string[i] == "u" ||
      string[i] == "U" ||
      string[i] == "e" ||
      string[i] == "E" ||
      string[i] == "o" ||
      string[i] == "O"
    ) {
      result += "";
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(findI("What are you, a communist?"));
