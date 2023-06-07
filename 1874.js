const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
const n = +input.shift();
const stack = [];
let answer = '';
let count = 1;
let i = 0;

while (true) {
  if (i === n) break;

  if (count <= input[i]) {
    stack.push(count);
    count++;
    answer += '+\n';
  } else {
    if (stack[stack.length - 1] !== input[i]) {
      answer = 'NO';
      break;
    }
    stack.pop();
    i++;
    answer += '-\n';
  }
}

console.log(answer.trim());
