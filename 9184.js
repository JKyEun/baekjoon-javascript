const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
input.pop();
const memo = [];
let eachInput = [];
let answer = '';

function recursive(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  } else if (a > 20 || b > 20 || c > 20) {
    return recursive(20, 20, 20);
  } else if (memo[a][b][c]) {
    return memo[a][b][c];
  } else if (a < b && b < c) {
    memo[a][b][c] = recursive(a, b, c - 1) + recursive(a, b - 1, c - 1) - recursive(a, b - 1, c);
    return memo[a][b][c];
  } else {
    memo[a][b][c] =
      recursive(a - 1, b, c) + recursive(a - 1, b - 1, c) + recursive(a - 1, b, c - 1) - recursive(a - 1, b - 1, c - 1);
    return memo[a][b][c];
  }
}

for (let i = 0; i < 21; i++) {
  memo[i] = [];
  for (let j = 0; j < 21; j++) {
    memo[i][j] = [];
    for (let k = 0; k < 21; k++) {
      memo[i][j][k] = null;
    }
  }
}

for (let i = 0; i < input.length; i++) {
  eachInput = input[i].split(' ').map(Number);
  answer += `w(${eachInput[0]}, ${eachInput[1]}, ${eachInput[2]}) = ${recursive(
    eachInput[0],
    eachInput[1],
    eachInput[2]
  )}\n`;
}

console.log(answer.trim());
