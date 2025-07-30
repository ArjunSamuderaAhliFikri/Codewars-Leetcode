// NOT COMPLETE

function incrementString(strng) {
  const lastSlice = strng.split("").filter((str) => isNaN(Number(str)));

  let getNumbers = strng.split("").slice(lastSlice.length).join("") + 1;
  return getNumbers;
}

console.log(incrementString("foobar000"));
