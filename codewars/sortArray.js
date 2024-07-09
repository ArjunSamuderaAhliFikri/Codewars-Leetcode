function sortArray(array) {
  let newArray = [];
  let currentArray = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < currentArray) {
      newArray.push(array[i]);
      currentArray = array[i];
    } else {
      currentArray = array[i];
    }
  }
  return newArray;
}

console.log(sortArray([1, 5, 4, 2, 9]));
