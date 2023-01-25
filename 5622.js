const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('');

let num = 0;

const dial = {
    2 : 'ABC',
    3 : 'DEF',
    4 : 'GHI',
    5 : 'JKL',
    6 : 'MNO',
    7 : 'PQRS',
    8 : 'TUV',
    9 : 'WXYZ'
}


for (let i = 0; i < input.length; i++) {
    for (let j = 2; j <= 9; j++) {
        if (dial[j].includes(input[i])) {
            num += j + 1;
        }
    }
}

console.log(num);