const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) { // 첫번째 for문
    let count = 0;
    let score = 0;
    for (let j = 0; j < input[i].length; j++) { // 두번째 for문
        if (input[i][j] === 'O') {
            count++;
            score += count;
        } else {
            count = 0;
        }
    }
    console.log(score);
}