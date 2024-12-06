function memoized(fn) {
  const memory = new Map();
  return function (...arguments) {
    if (memory.has(arguments.toString())) {
      console.log("memoized!");
      return memory.get(arguments.toString());
    }

    memory.set(arguments.toString(), fn.apply(this, arguments));

    console.log("not memoized!");
    return memory.get(arguments.toString());
  };
}

const declareMemoized = memoized((a, b) => a + b);

// test case
console.log(declareMemoized(3, 2));
console.log(declareMemoized(3, 2));
console.log(declareMemoized(3, 2));
