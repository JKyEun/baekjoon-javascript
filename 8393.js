const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString());

let sum = 0;

for (let i = input; i > 0; i--) {
    sum += i;
}

console.log(sum);