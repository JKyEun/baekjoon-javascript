const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

const subjectNum = parseInt(input[0]);
const score = input[1].split(' ').map(Number);
const maxScore = Math.max(...score);

let sumScore = 0;
for (let i = 0; i < subjectNum; i++) {
    sumScore += (score[i] / maxScore) * 100
}

console.log(sumScore / subjectNum);