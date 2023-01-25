const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(' ');
const fixedCost = parseInt(input[0]);
const flexibleCost = parseInt(input[1]);
const productPrice = parseInt(input[2]);
const BEP = fixedCost / (productPrice - flexibleCost);
let answer = 0;

answer = Math.floor(BEP+1);

if ((productPrice - flexibleCost) <= 0) {
    answer = -1;
}

console.log(answer);