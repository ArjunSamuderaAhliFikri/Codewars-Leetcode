// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x) {
  return x.reduce((acc, curr) => (acc += Number(curr)), 0);
}
