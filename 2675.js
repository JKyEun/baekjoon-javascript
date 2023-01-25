const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

let arr = [];
let arr2 = [];
let result = '';

for (let i = 1; i <= parseInt(input[0]); i++) {
    arr = input[i].trim().split(' ');
    for (let j = 0; j < arr[1].length; j++) {
        arr2 = arr[1].trim().split('');
        result += arr2[j].repeat(arr[0]);
    }
    result += '\n'
}

console.log(result);