const fs = require("fs");
const input = fs.readFileSync("/dev/stdin")
.toString().trim().replaceAll('\n', ' ').split(' ').map(x => Number(x));

for (let i = 1; i < input[0]*2; i+=2) {
    console.log(input[i] + input[i+1]);
}