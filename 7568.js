const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = +input.shift();
let answer = new Array(5);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
}

for (let i = 0; i < N; i++) {
  let rank = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
        rank++;
      }
    }
  }
  answer[i] = rank;
}

console.log(answer.join(" "));
