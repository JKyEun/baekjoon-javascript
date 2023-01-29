const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let count = 0;

for (let k = 0; k < input.length-1; k++) {
  let n = parseInt(input[k]);
  let isPrimeArr = new Array(2 * n + 1);
  isPrimeArr.fill(true);
  isPrimeArr[0] = false;
  isPrimeArr[1] = false;
  for (let i = 2; i <= 2*n; i++) {
    if (isPrimeArr[i]) {
      for (let j = i + i; j <= 2*n; j += i) {
        isPrimeArr[j] = false;
      }
    }
  }
  isPrimeArr = isPrimeArr.slice(n+1, 2*n+1)
  count = isPrimeArr.reduce((cnt, element) => cnt + (true === element), 0);
  console.log(count);
}