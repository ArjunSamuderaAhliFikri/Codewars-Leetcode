// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

function between(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

// another way
function between(a, b) {
  let newA = a;
  let result = [];

  while (newA <= b) {
    result.push(newA);
    newA++;
  }

  return result;
}
