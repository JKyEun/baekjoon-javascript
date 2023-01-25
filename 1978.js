const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const inputNums = input[1].trim().split(' ').map(Number);
let count = 0;
let primeNum = 0;

for (let i = 0; i < parseInt(input[0]); i++) {
    count = 0;
    for (let j = 1; j <= inputNums[i]; j++) {
        if (inputNums[i]%j == 0) {
            count++;
        }
    }
    if (count == 2) {
        primeNum++;
    }
}

console.log(primeNum);