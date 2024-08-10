function friend(friends) {
  let result = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length <= 4) {
      if (isNaN(Number(friends[i]))) {
        result.push(friends[i]);
      }
    }
  }
  return result;
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
