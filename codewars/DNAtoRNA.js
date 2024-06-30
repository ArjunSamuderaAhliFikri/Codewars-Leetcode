// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  return [...dna].reduce(
    (acc, curr) => (curr == "T" ? (acc += "U") : (acc += curr)),
    ""
  );
}
