const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const arr1 = input[0].split(' ').map(Number);
const arr2 = input[1].split(' ').map(Number);

let answer = '';

for (let i = 0; i < arr1[0]; i++) {
    if (arr2[i] < arr1[1]) {
        answer += arr2[i].toString() + " ";
    }
}

console.log(answer);