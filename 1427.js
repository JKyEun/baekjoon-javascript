const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("").map(Number);

input.sort((a, b) => b - a);
const answer = input.join('');

console.log(answer);