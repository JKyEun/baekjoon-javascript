const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
let arr = [];
let max = 0;
let locationMax = '';

for (let i = 0; i < 9; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max <= arr[i][j]) {
      max = arr[i][j];
      locationMax = (i+1) + ' ' + (j+1);
    }
  }
}

console.log(max);
console.log(locationMax);