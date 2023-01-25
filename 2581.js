const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const min = parseInt(input[0]);
const max = parseInt(input[1]);
let count = 0;
let primeArr = [];

for (let i = min; i <= max; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
        if (i%j == 0) {
            count++;
        }
        if (count > 2) {
            break;
        }
    }
    if (count == 2) {
        primeArr.push(i);
    }
}

const primeSum = primeArr.reduce((prev, cur) => prev + cur, 0);
const primeMin = Math.min(...primeArr);

if (primeArr.length == 0) {
    console.log(-1);
} else {
    console.log(primeSum);
    console.log(primeMin);
}