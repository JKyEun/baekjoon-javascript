const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const S = new Set();
let answer = 0;

for (let i = 0; i < N; i++) {
  S.add(input[i]);
}

for (let i = 0; i < M; i++) {
  if (S.has(input[N + i])) {
    answer++;
  }
}

console.log(answer);
