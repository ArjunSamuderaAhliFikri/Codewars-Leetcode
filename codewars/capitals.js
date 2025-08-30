// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

const capitals = (word) => {
  const result = [];

  for (let i = 0; i < word.length; i++) {
    const currentWord = word[i];
    const checkIsCapitalize = currentWord == word[i].toUpperCase();

    if (checkIsCapitalize) {
      result.push(i);
    }
  }

  return result;
};
