const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

let N = input[0].split(' ').map(Number)[0];
const M = input[0].split(' ').map(Number)[1];
const idxArr = input[1].split(' ').map(Number);

const queue = [];
let answer = 0;

for (let i = 0; i < N; i++) {
  queue.push(i + 1);
}

const leftOperator = (arr) => {
  arr.push(arr.shift());
  answer++;
};

const rightOperator = (arr) => {
  arr.unshift(arr.pop());
  answer++;
};

const getDirection = (curN, idx) => {
  if (curN / 2 >= idx) return 'left';
  return 'right';
};

for (let i = 0; i < M; i++) {
  if (getDirection(N, queue.indexOf(idxArr[i])) === 'left') {
    while (queue[0] !== idxArr[i]) leftOperator(queue);
    queue.shift();
    N--;
  } else {
    while (queue[0] !== idxArr[i]) rightOperator(queue);
    queue.shift();
    N--;
  }
}

console.log(answer);
