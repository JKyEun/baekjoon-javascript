const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const inputNum = parseInt(input);

let count = 2;
let topNumMax = 3;
let topNum = 1;
let bottomNumMax = 2;
let bottomNum = 1;
let answer = '';
let isIncreasing = true;

while (count < inputNum) {
    if (isIncreasing) {
        topNum++;
    } else {
        topNum--;
    }

    if (topNum == topNumMax) {
        isIncreasing = false;
        topNumMax += 2;
    }

    if (topNum == 1) {
        count++;
        isIncreasing = true;
    }
    count++;
}

count = 1;
isIncreasing = true;

while (count < inputNum) {
    if (isIncreasing) {
        bottomNum++;
    } else {
        bottomNum--;
    }

    if (bottomNum == bottomNumMax) {
        isIncreasing = false;
        bottomNumMax += 2;
    }

    if (bottomNum == 1) {
        count++;
        isIncreasing = true;
    }
    count++;
}

answer = topNum+'/'+bottomNum
console.log(answer);