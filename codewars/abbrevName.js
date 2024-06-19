function abbrevName(name) {
  if (!name) return;
  let result = "";
  let firstName = name[0];
  for (let i = 0; i < name.length; i++) {
    if (name[i] == " ") {
      return (result += `${firstName}.${name[i + 1]}`.toUpperCase());
    }
  }
}
