//!Write a function to find the second largest number in an array.
let arr = [10, 5, 8, 20, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log(secondLargest); // 15


console.log(typeof null);

console.log(typeof null==="object");//true