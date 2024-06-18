function noSpace(x) {
  // opsi simpel
  return [...x].reduce(
    (acc, curr) => (curr == " " ? (acc += "") : (acc += curr)),
    ""
  );

  //   opsi ribet
  // let result = "";
  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] == " ") {
  //     result += "";
  //   } else {
  //     result += x[i];
  //   }
  // }
  // return result;
}
console.log(noSpace("a    r j u n"));
