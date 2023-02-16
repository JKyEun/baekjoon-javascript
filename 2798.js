const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
let answer = 0;
let dif = M;
let sum = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) {
      j++;
    }
    for (let k = 0; k < N; k++) {
      if (k === i || k === j) {
        k++;
      }
      sum = numbers[i] + numbers[j] + numbers[k];
      if (sum > M) {
        sum = 0;
      }
      if (dif > M - sum) {
        dif = M - sum;
        answer = sum;
      }
    }
  }
}

console.log(answer);