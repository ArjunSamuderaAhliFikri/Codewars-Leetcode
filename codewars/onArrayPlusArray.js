function arrayPlusArray(arr1, arr2) {
  let resultOne = arr1.reduce((acc, curr) => acc + curr, 0);
  let resultTwo = arr2.reduce((acc, curr) => acc + curr, 0);
  return resultOne + resultTwo;
}
