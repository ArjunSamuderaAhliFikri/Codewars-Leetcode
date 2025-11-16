// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  let howManyYears = 1;
  let populateInCurrentYears = Math.floor(p0);

  while (populateInCurrentYears < p) {
    let calculate = Math.floor(
      populateInCurrentYears + populateInCurrentYears * (percent / 100) + aug
    );

    if (calculate >= p) {
      return howManyYears;
    } else {
      populateInCurrentYears = calculate;
      howManyYears++;
    }
  }
}

console.log(nbYear(1000, 2, 50, 1213));
