function accum(s) {
  return s
    .split("")
    .map((item, i) => item.toUpperCase() + item.toLowerCase().repeat(i))
    .join("-");
}
