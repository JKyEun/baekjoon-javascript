const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n').map(Number);
let average = 0;

input.sort(function(a, b)  {
  return a - b;
});

input.forEach((el) => {
  average += el;
});

average = average / 5;

console.log(average);
console.log(input[2]);