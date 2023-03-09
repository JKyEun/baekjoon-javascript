const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
const inputNum = parseInt(input);

let x = 0;
let count = 1;
let floorMax = 0;
while (inputNum > floorMax) {
  x += count;
  count++;
  floorMax = 6 * x + 1;
}

if (inputNum == 1) {
  count = 1;
}

console.log(count);
