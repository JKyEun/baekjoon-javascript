const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const [N, k] = input[0].split(' ').map(Number);
const scoreArr = input[1].split(' ').map(Number);

scoreArr.sort((a, b) => b - a);

console.log(scoreArr[k-1]);