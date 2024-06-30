function solution(string) {
  return [...string].reduce(
    (acc, curr) =>
      curr.toUpperCase() == curr ? (acc += ` ${curr}`) : (acc += curr),
    ""
  );
}
