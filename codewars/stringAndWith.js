function solution(str, ending) {
  if (typeof str == "string" && typeof ending == "string") {
    let newStr = [...str].slice(Math.floor(str.length / 2), str.length); //u r a i
    for (let i = 0; i < newStr.length; i++) {
      for (let j = 0; j < ending.length; j++) {
        if (newStr[i] == ending[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

console.log(solution("samurai", "ai"));
