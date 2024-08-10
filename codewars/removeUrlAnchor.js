// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url) {
  let result = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] == "#") {
      return result;
    } else {
      result += url[i];
    }
  }
  return result;
}
