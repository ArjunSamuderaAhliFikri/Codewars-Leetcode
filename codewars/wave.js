//www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
https: function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (str !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}
console.log(wave("hello"));
