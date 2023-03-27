const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');

const [N, K] = input.map(Number);
const queue = [];
const answerArr = [];
let temp;

for (let i = 0; i < N; i++) {
  queue.push(i + 1);
}

while (queue.length > 0) {
  for (let i = 1; i < K; i++) {
    temp = queue.shift();
    queue.push(temp);
  }
  temp = queue.shift();
  answerArr.push(temp);
}

console.log('<' + answerArr.join(', ') + '>');
