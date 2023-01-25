const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

const count = input.length;

for (let i = 0; i < count; i++) {
    const arr = input[i].split(' ').map(Number);
    console.log(arr[0]+arr[1]);
}