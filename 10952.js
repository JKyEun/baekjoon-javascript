const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

const count = input.length -1;

for (let i = 0; i < count; i++) {
    const arr = input[i].split(' ').map(Number);
    console.log(arr[0]+arr[1]);
}