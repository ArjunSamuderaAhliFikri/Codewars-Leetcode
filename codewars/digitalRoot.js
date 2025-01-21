function digitalRoot(n) {
  let result = [];
  for (let i = 0; i < n.toString().split("").length; i++) {
    if (i < 1) {
      let firstCount = n
        .toString()
        .split("")
        .reduce((acc, curr) => (acc += Number(curr)), 0);
      result.push(firstCount);
    }
    if (result[result.length - 1].toString().length < 2) {
      return result[result.length - 1];
    }
    const getLastNum = result[result.length - 1];
    const countLastNum = getLastNum
      .toString()
      .split("")
      .reduce((acc, curr) => (acc += Number(curr)), 0);
    result.push(countLastNum);
  }
  return result;
}

console.log(digitalRoot(456));
