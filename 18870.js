const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const inputArr = input[1].split(' ').map(Number);
const setArr = [...new Set(inputArr)].sort((a, b) => a - b);
const map = new Map();
let answer = '';

setArr.forEach((el, idx) => map.set(el, idx));

for (num of inputArr) {
  answer += map.get(num) + " ";
}

console.log(answer.trim());