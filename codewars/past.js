function past(h, m, s) {
  let result = 0;
  let seconds = s * 1000;
  let minutes = m * 60 * 1000;
  let hours = h * 3600 * 1000;
  return (result += hours + minutes + seconds);
}

console.log(past(1, 1, 1));
