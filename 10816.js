const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const N = +input[0];
const M = +input[2];

const numArr = input[1].split(' ').map(Number);
const questArr = input[3].split(' ').map(Number);
const numMap = new Map();
const answerArr = [];

for (let i = 0; i < N; i++) {
  numMap.set(numArr[i], 0);
}

for (let i = 0; i < N; i++) {
  numMap.set(numArr[i], numMap.get(numArr[i]) + 1);
}

for (let i = 0; i < M; i++) {
  if (numMap.has(questArr[i])) {
    answerArr.push(numMap.get(questArr[i]));
  } else {
    answerArr.push(0);
  }
}

console.log(answerArr.join(' '));
