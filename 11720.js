const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const arr = input[1].toString().split('').map(Number);

let result = 0;

for (let i = 0; i < parseInt(input[0]); i++) {
    result += arr[i];
}

console.log(result);