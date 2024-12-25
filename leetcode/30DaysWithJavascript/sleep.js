async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world!");
    }, millis);
  });
}

// unit case
sleep(200).then((response) => console.log(response));
