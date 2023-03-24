const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);

const dictArr = input.slice(0, N);
const questArr = input.slice(N, N + M);
const answerArr = new Array(M);
const dictMap = new Map();

for (let i = 0; i < N; i++) {
  dictMap.set(dictArr[i], i + 1);
}

for (let i = 0; i < M; i++) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(questArr[i])) {
    answerArr[i] = dictMap.get(questArr[i]);
  } else {
    answerArr[i] = dictArr[+questArr[i] - 1];
  }
}

console.log(answerArr.join('\n'));
