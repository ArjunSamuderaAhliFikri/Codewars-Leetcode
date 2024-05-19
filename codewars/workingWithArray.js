function removeNthElement(arr, n) {
  const newArray = [...arr];
  newArray.splice(n, 1);
  return newArray;
}
console.log(removeNthElement([9, 7, 6, 9], 0));
