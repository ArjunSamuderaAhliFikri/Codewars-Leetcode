// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
  let result = [];
  for (let i = 0; i < str.split(" ").length; i++) {
    // kita masukkan kata saat ini ke dalam variable
    const currentWord = str.split(" ")[i];

    // kita tampung panjang kata saat ini ke dalam variable
    const lengthCurrentWord = currentWord.length;

    // kita akan kirim ke dalam variable 'result'
    result.push(`${currentWord} ${lengthCurrentWord}`);

    // cara brutal
    // result.push(`${str.split(" ")[i]} ${str.split(" ")[i].length}`);
  }

  //   kembalikan hasil akhir
  return result;
}

// test case
console.log(addLength("apple ban"));
console.log(addLength("you will win"));
