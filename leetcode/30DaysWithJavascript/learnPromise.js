// https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript

async function learnPromise(promise1, promise2) {
  const testing = (await promise1) + (await promise2);

  console.log(testing);
}

// test case
learnPromise(
  new Promise((resolve, reject) => {
    resolve(2);
  }),
  new Promise((resolve, reject) => {
    resolve(2);
  })
);
