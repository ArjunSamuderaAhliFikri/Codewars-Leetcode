// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

// complex technique
// function twoSort(s) {
//   const resultOfSort = s.sort()[0];
//   let result = "";

//   for (let i = 0; i < resultOfSort.length; i++) {
//     result += resultOfSort[i];

//     if (i < resultOfSort.length - 1) {
//       result += "***";
//     }
//   }

//   return result;
// }

// simple technique
const twoSort = (s) => {
  return s.sort()[0].split("").join("***");
};

// test case
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
