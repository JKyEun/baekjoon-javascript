const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
let sum = 0;
let notDwarf = [];

input.forEach((i) => {
  sum += i;
});

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i !== j) {
      if (input[i] + input[j] === sum - 100) {
        notDwarf = [input[i], input[j]];
        break;
      }
    }
  }
}

let answer = input.filter((i) => i !== notDwarf[0] && i !== notDwarf[1]);
answer = answer.sort((a, b) => a - b);

console.log(answer.join('\n'));
