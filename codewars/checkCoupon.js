// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const months = [
    "January",
    "February",
    "Marth",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const checkCurrentDate = currentDate.split(" ");
  const checkExpirationDate = expirationDate.split(" ");

  //   check statement
  if (enteredCode != correctCode) {
    return false;
  }
  //   same date
  if (checkCurrentDate == checkExpirationDate) {
    return true;
  }

  if (checkCurrentDate[2] > checkExpirationDate[2]) {
    return false;
  } else if (checkCurrentDate[2] == checkExpirationDate) {
    const currentMonth = months.indexOf(checkCurrentDate[0]) + 1;
    const expirationMonth = months.indexOf(checkExpirationDate[0]) + 1;

    if (currentMonth > expirationMonth) {
      return false;
    } else if (currentMonth == expirationMonth) {
      if (
        parseInt(checkCurrentDate[1][0]) > parseInt(checkExpirationDate[1][0])
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  } else {
    const currentMonth = months.indexOf(checkCurrentDate[0]) + 1;
    const expirationMonth = months.indexOf(checkExpirationDate[0]) + 1;

    if (currentMonth > expirationMonth) {
      return false;
    } else if (currentMonth == expirationMonth) {
      if (
        parseInt(checkCurrentDate[1][0]) > parseInt(checkExpirationDate[1][0])
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}

const result = checkCoupon("123", "123", "July 9, 2014", "July 2, 2014");

console.log(result);
