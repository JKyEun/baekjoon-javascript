const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, M] = input[0].split(' ').map(Number);
let matrixA = [];
let matrixB = [];
let answer = ' ';

for (let i = 1; i <= N; i++) {
  matrixA.push(input[i].split(' ').map(Number));
}
for (let i = N+1; i <= 2*N; i++) {
  matrixB.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answer += String(matrixA[i][j]+matrixB[i][j]) + ' ';
  }
  answer += '\n';
}

console.log(answer.trim());