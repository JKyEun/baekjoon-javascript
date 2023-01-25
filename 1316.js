const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

let answer = 0;
let lastArr = [];

for (let i = 1; i < input.length; i++) {
    let arr = input[i].split('');
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == arr[j+1]) {
            arr.splice(j+1, 1);
            j--;
        }
    }
    lastArr = [...new Set(arr)];
    if (arr.length == lastArr.length) {
        answer++;
    }
}

console.log(answer);