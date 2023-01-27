const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");
const min = parseInt(input[0]);
const max = parseInt(input[1]);
let isPrimeArr = new Array(max + 1);

isPrimeArr.fill(true);
isPrimeArr[0] = false;
isPrimeArr[1] = false;

for (let i = 2; i <= max; i++) {
  if (isPrimeArr[i]) {
    for (let j = i + i; j <= max; j += i) {
      isPrimeArr[j] = false;
    }
  }
}

for (let i = min; i <= max; i++) {
  if (isPrimeArr[i]) {
    console.log(i);
  }
}