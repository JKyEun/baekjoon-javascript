const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const inputNum = parseInt(input);

let answerArr = [];

for (let i = 0; i <= inputNum; i++) {
    answerArr.push(-1);
}

let mem = 5000;
for (let i = 3; i <= inputNum; i++) {
    mem = 5000;
    for (let j = 0; j <= i/5; j++) {
        for (let k = 0; k <= i/3; k++) {
            if (i == (5*j + 3*k) && mem > j+k) {
                mem = j+k;
                answerArr[i] = mem;
            }
        }
    }
}

console.log(answerArr[inputNum]);