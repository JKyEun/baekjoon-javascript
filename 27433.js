const fs = require('fs');
let input = +fs.readFileSync('./dev/stdin').toString().trim();
let answer = 1;

function factorial(input) {
  if (input === 0) return;

  answer = answer * input;
  factorial(input - 1);
}

factorial(input);

console.log(answer);
