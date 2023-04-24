const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const K = +input.shift();
const stack = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  if (input[i] !== '0') {
    stack.push(input[i]);
  } else {
    stack.pop();
  }
}

for (let i = 0; i < stack.length; i++) {
  answer += +stack[i];
}

console.log(answer);
