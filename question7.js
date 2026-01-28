//Write a function that counts character frequency in a string.


let str = "hello";
let count = {};

for (let char of str) {
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}

console.log(count);
