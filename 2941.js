const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const croatia = {
    1 : 'c=', 
    2 : 'c-', 
    3 : 'dz=', 
    4 : 'd-', 
    5 : 'lj', 
    6 : 'nj', 
    7 : 's=', 
    8 : 'z='
}

let answer = input;

for (let i = 1; i < 9; i++) {
    if (input.includes(croatia[i])) {
        answer = answer.replaceAll(croatia[i], 'A');
    }
}

console.log(answer.length);