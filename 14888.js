const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const numArr = input[0].split(' ').map(Number);
const operator = input[1].split(' ').map(Number);
let operatorArr = [];

for (let i = 0; i < operator.length; i++) {
  for (let j = 0; j < operator[i]; j++) {
    operatorArr.push(i);
  }
}

let result = 0;
let min = Infinity;
let max = 0;
let isVisited = new Array(N - 1).fill(false);
let output = [];

function calculate(output) {
  let result = numArr[0];
  for (let i = 0; i < N; i++) {
    if (output[i] === 0) {
      result = result + numArr[i + 1];
    } else if (output[i] === 1) {
      result = result - numArr[i + 1];
    } else if (output[i] === 2) {
      result = result * numArr[i + 1];
    } else if (output[i] === 3) {
      if (result < 0) {
        result = Math.abs(result);
        result = -Math.floor(result / numArr[i + 1]);
      } else {
        result = Math.floor(result / numArr[i + 1]);
      }
    }
  }
  return result;
}

function dfs(cnt) {
  if (cnt === N - 1) {
    result = calculate(output);
    if (result < min) {
      min = result;
    }
    if (result > max) {
      max = result;
    }
  }

  for (let i = 0; i < N - 1; i++) {
    if (isVisited[i]) continue;
    isVisited[i] = true;
    output.push(operatorArr[i]);
    dfs(cnt + 1);
    isVisited[i] = false;
    output.pop();
  }
}

dfs(0);

console.log(max + '\n' + min);
