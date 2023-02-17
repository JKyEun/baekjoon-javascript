const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();
let answer = 0;

for (let i = input; i >= 0; i--) {
  if (i === 0 && answer === 0) {
    answer = 0;
  }
  const length = (i+"").length;
  let sum = i;
  for (let j = 0; j < length; j++) {
    sum += +(i+"")[j];
  }
  if (input === sum) {
    answer = i;
  }
}

console.log(answer);