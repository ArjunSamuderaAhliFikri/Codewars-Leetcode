function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const setTimeLimid = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn.apply(this, args)
        .then((response) => {
          clearTimeout(setTimeLimid);
          resolve(response);
        })
        .catch((err) => {
          clearTimeout(setTimeLimid);
          reject(err);
        });
    });
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
