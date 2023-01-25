const fs = require("fs");
const input = 
fs.readFileSync("./input.txt").toString().trim().split('\n').map(Number);

let num = 0;

for (let i = 0; i < input.length; i++) {
    if (num < input[i]) {
        num = input[i];
    }
}

const index = input.indexOf(num)+1;

console.log(num+"\n"+index);