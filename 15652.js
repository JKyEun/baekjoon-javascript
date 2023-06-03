const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
const N = +input.shift();
const M = +input.shift();

let output = [];
let result = '';

function isIncreasing(output) {
  let isIncreasing = true;

  for (let i = 0; i < output.length - 1; i++) {
    if (output[i] > output[i + 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing;
}

function dfs(cnt) {
  if (isIncreasing(output)) {
    if (cnt === M) {
      result += `${output.join(' ')}\n`;
      return;
    }
  } else {
    return;
  }

  for (let i = 0; i < N; i++) {
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
  }
}

dfs(0);
console.log(result.trim());
