const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const totalNum = parseInt(input[0]);
let answer = '';

for (let i = 1; i < totalNum+1; i++) {
    const newArr = input[i].split(' ').map(Number);
    answer += newArr[0] + newArr[1] + '\n';
}

console.log(answer);