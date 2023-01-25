const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split('\n');

let answer = '';

for (let i = 1; i <= input[0]; i++) {
    let newArr = input[i].split(' ').map(Number);
    answer += `Case #${i}: ${newArr[0] + newArr[1]}\n`;
}

console.log(answer);