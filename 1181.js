const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = input.shift();
let answer = [];

input.sort();
input.sort((a, b) => a.length - b.length);
answer = [...new Set(input)];

for (word of answer) {
  console.log(word);
}