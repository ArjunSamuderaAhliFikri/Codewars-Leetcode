// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  let storage = new Map();

  for (let i = 0; i < string.length; i++) {
    if (storage.has(string[i])) {
      let currentCount = storage.get(string[i]);
      storage.set(string[i], currentCount + 1);
    } else {
      storage.set(string[i], 1);
    }
  }

  return Object.fromEntries(storage);
}

//   use case
const result = count("aba");
console.log(result);
