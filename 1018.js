const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const length = input.shift().split(" ").map(Number);
let answer = 99999999;
let num = 0;
let blackBoardNum = 0;
let whiteBoardNum = 0;
const blackBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB"
];
const whiteBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW"
]

for (let i = 0; i <= length[0]-8; i++) {
  for (let j = 0; j <= length[1]-8; j++) {
    checkPaintNum(i, j);
  }
}

function checkPaintNum(height, width) {
  blackBoardNum = 0;
  whiteBoardNum = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (blackBoard[i][j] !== input[height+i][width+j]) {
        blackBoardNum++;
      }
      if (whiteBoard[i][j] !== input[height+i][width+j]) {
        whiteBoardNum++;
      }
    }
  }
  blackBoardNum > whiteBoardNum ? num = whiteBoardNum : num = blackBoardNum;
  if (num < answer) {
    answer = num;
  }
}

console.log(answer);
