function compose(f) {
  return function (x) {
    let result = x;
    for (let i = f.length - 1; i >= 0; i--) {
      result = f[i](result);
    }
    return result;
  };
}
const comp = compose([(x) => x + 1, (x) => x * x, (x) => x * 2]);

console.log(comp(4));
