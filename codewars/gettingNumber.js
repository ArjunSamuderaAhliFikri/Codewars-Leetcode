// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript

function getAge(inputString) {
  for (let i = 0; i < inputString.split("").length; i++) {
    if (typeof parseInt(inputString.split("")[i]) == "number") {
      return parseInt(inputString.split("")[i]);
    }
  }
}

// unit case
const result = getAge("4 years old"); //result : 4
console.log(result);
