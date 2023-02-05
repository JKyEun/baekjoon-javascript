const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let average = 0;
let median = 0;
let mode = 0;
let range = 0;

input.shift();
input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  average += input[i];
}

average = Math.round(average / input.length);
median = input[Math.floor(input.length / 2)];
range = input[input.length - 1] - input[0];

const map = new Map();
let max = 1;
for (let num of input) {
  if (map.has(num)) {
    max = Math.max(max, map.get(num) + 1);
    map.set(num, map.get(num) + 1);
  } else map.set(num, 1);
}

const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}

mode += maxArr.length === 1 ? maxArr[0] : maxArr[1];

console.log(average + "\n" + median + "\n" + mode + "\n" + range);