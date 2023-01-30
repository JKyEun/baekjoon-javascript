const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let n = 0;
let primeNums = [];
let partition = [];

for (let k = 1; k < input.length; k++) {
  partition = [];
  primeNums = [];
  n = parseInt(input[k]);
  let isPrimeArr = new Array(n + 1);
  isPrimeArr.fill(true);
  isPrimeArr[0] = false;
  isPrimeArr[1] = false;
  for (let i = 2; i <= n; i++) {
    if (isPrimeArr[i]) {
      for (let j = i + i; j <= n; j += i) {
        isPrimeArr[j] = false;
      }
    }
  }
  for (let i = 0; i < isPrimeArr.length; i++) {
    if (isPrimeArr[i]) {
      primeNums.push(i);
    }
  }
  for (let i = 0; i < primeNums.length; i++) {
    if (primeNums.includes(n - primeNums[i])) {
      partition.push([n - primeNums[i], primeNums[i], n - primeNums[i] * 2]);
    }
  }
  while (partition[0][2] > 0) {
    partition.shift();
  }
  console.log(partition[0][0] + " " + partition[0][1]);
}
