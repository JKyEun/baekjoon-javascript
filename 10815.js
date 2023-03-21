const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const mySet = new Set(input[1].split(' ').map(Number));
const arr = input[3].split(' ').map(Number);
const answerArr = [];
let bool = true;

for (let i = 0; i < arr.length; i++) {
  bool = mySet.has(arr[i]);
  answerArr.push(bool ? 1 : 0);
}

console.log(answerArr.join(' '));
