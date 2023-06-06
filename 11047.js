const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let [N, K] = input.shift().split(' ').map(Number);
const coins = input.map(Number);
let answer = 0;
let temp = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K >= coins[i]) {
    temp = Math.floor(K / coins[i]);
    K = K - coins[i] * temp;
    answer += temp;
  }
}

console.log(answer);
