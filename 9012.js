const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const T = +input.shift();
const answer = new Array(T).fill(null);
let stack = 0;

for (let i = 0; i < T; i++) {
  stack = 0;
  const str = input[i].split('');
  for (let j = 0; j < str.length; j++) {
    if (str[j] === '(') {
      stack += 1;
    } else if (str[j] === ')' && stack === 0) {
      answer[i] = 'NO';
    } else {
      stack -= 1;
    }
  }

  if (stack === 0 && answer[i] === null) {
    answer[i] = 'YES';
  } else {
    answer[i] = 'NO';
  }
}

console.log(answer.join('\n'));
