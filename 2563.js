const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const paperNum = parseInt(input[0]);
let colorPaperArr = [];
let paper = [];
let x = 0;
let y = 0;
let count = 0;

input.shift();

for (let i = 0; i < paperNum; i++) {
  colorPaperArr.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < 100; i++) {
  let oneLine = new Array(100);
  oneLine.fill(false);
  paper.push(oneLine);
}

for (let i = 0; i < paperNum; i++) {
  x = colorPaperArr[i][0];
  y = colorPaperArr[i][1];
  for (let j = x; j < x+10; j++) {
    for (let k = y; k < y+10; k++) {
      paper[j][k] = true;
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j ++) {
    if (paper[i][j]) {
      count++;
    }
  }
}

console.log(count);