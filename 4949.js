const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const filteredInput = input.filter(el => el !== '.');
const answer = new Array(filteredInput.length).fill(null);
let stack = [];

for (let i = 0; i < answer.length; i++) {
  stack = [];
  const str = filteredInput[i].split('');
  str.pop();
  for (let j = 0; j < str.length; j++) {
    if (str[j] === '[') {
      stack.push('[');
    } else if (str[j] === '(') {
      stack.push('(');
    } else if (str[j] === ']') {
      if (stack.length === 0) {
        answer[i] = 'no';
        break;
      }
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        answer[i] = 'no';
        break;
      }
    } else if (str[j] === ')') {
      if (stack.length === 0) {
        answer[i] = 'no';
        break;
      }
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        answer[i] = 'no';
        break;
      }
    }
  }

  if (answer[i] === null) {
    if (stack.length === 0) {
      answer[i] = 'yes';
    } else {
      answer[i] = 'no';
    }
  }
}

console.log(answer.join('\n'));
