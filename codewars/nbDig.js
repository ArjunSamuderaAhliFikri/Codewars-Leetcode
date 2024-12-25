function nbDig(n, d) {
  //   let currentNumber = "";
  //   let countDigit = 0;
  //   for (let k = 1; k <= n; k++) {
  //     currentNumber = k.toString();

  //     if (k.toString().split("").includes(d)) {
  //       countDigit += 1;
  //     }
  //   }
  //   return countDigit;
  let testing = n.toString().split("");
  return testing.includes(d.toString());
}

console.log(nbDig(10, 1));
