const countSheeps = (sheep) => {
  return sheep.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
};
