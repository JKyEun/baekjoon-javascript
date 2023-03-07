const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
const N = +input.shift();
let queue = [];
let answer = [];

for (let i = 0; i < N; i++) {
  if (input[i].includes('push')) {
    const num = +input[i].split(' ')[1];
    queue.push(num);
  } else if (input[i] === 'pop') {
    if (queue.length > 0) {
      answer.push(queue.shift());
    } else {
      answer.push(-1);
    }
  } else if (input[i] === 'size') {
    answer.push(queue.length);
  } else if (input[i] === 'empty') {
    if (queue.length > 0) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if (input[i] === 'front') {
    if (queue.length > 0) {
      answer.push(queue[0]);
    } else {
      answer.push(-1);
    }
  } else if (input[i] === 'back') {
    if (queue.length > 0) {
      answer.push(queue[queue.length - 1]);
    } else {
      answer.push(-1);
    }
  }
}

console.log(answer.join('\n'));
