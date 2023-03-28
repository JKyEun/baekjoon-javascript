const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const N = +input.shift();
const deque = [];
const answerArr = [];

for (let i = 0; i < N; i++) {
  if (input[i].includes('push_back')) {
    deque.push(+input[i].split(' ')[1]);
  } else if (input[i].includes('push_front')) {
    deque.unshift(+input[i].split(' ')[1]);
  } else if (input[i] === 'pop_front') {
    if (deque.length === 0) {
      answerArr.push(-1);
    } else {
      answerArr.push(deque.shift());
    }
  } else if (input[i] === 'pop_back') {
    if (deque.length === 0) {
      answerArr.push(-1);
    } else {
      answerArr.push(deque.pop());
    }
  } else if (input[i] === 'size') {
    answerArr.push(deque.length);
  } else if (input[i] === 'empty') {
    if (deque.length === 0) {
      answerArr.push(1);
    } else {
      answerArr.push(0);
    }
  } else if (input[i] === 'front') {
    if (deque.length === 0) {
      answerArr.push(-1);
    } else {
      answerArr.push(deque[0]);
    }
  } else if (input[i] === 'back') {
    if (deque.length === 0) {
      answerArr.push(-1);
    } else {
      answerArr.push(deque[deque.length - 1]);
    }
  }
}

console.log(answerArr.join('\n'));
