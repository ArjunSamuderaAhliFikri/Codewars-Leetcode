//www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

https: function likes(names) {
  let pickResult = [
    "no one likes this",
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  ];

  if (names.length >= 4) {
    return pickResult[4];
  }

  return pickResult[names.length];
}

const result = likes(["Alex", "Jacob", "Mark", "Max", "Arjun", "Sappy"]);
console.log(result);
