// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
// step common
function powersOfTwo(n){
  let result = [];
  for(let i = 0; i <= n; i++) {
    result.push(2**i);
  }
  return result;
}
