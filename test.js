let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let nums = input[1].split(' ').map(Number);
let numbersOfOperators = input[2].split(' ').map(Number);
let max = Number.MIN_SAFE_INTEGER;
let result = [];
let answer = [];

const operatorCandidates = ['+', '-', '*', '/'];
const operators = [];

for (let i = 0; i < operatorCandidates.length; i++) {
  let count = 0;
  while (count !== numbersOfOperators[i]) {
    operators.push(operatorCandidates[i]);
    count++;
  }
}

let ch = Array.from({ length: operators.length + 1 }, () => 0);
let tmp = Array.from({ length: operators.length + N }, () => 0);

for (let i = 0; i < nums.length; i++) {
  tmp[i * 2] = nums[i];
}

function DFS(L) {
  if (L === N - 1) {
    let stack = tmp.slice().reverse();
    while (stack.length > 1) {
      let num1 = stack.pop();
      let operator = stack.pop();
      let num2 = stack.pop();

      switch (operator) {
        case '+':
          stack.push(num1 + num2);
          break;
        case '-':
          stack.push(num1 - num2);
          break;
        case '*':
          stack.push(num1 * num2);
          break;
        case '/':
          stack.push(parseInt(num1 / num2));
          break;
        default:
          break;
      }
    }
    result.push(stack.pop());
  } else {
    for (let i = 0; i < operators.length; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        tmp[L * 2 + 1] = operators[i];
        DFS(L + 1);
        ch[i] = 0;
      }
    }
  }
}

DFS(0);
answer.push(Math.max(...result));
answer.push(Math.min(...result));
console.log(answer.join('\n'));
