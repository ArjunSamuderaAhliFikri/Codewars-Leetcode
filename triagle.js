function generateTriagle(rows) {
  let result = "";
  let generateStar = 4;
  for (let i = 5; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      result += "#";
    }

    for (let k = i - 1; k < i; k++) {
      result += "*";
    }
    for (let l = generateStar; l < i; l++) {
      result += "$";
    }

    result += "\n";
  }
  return result;
}

console.log(generateTriagle(5));
