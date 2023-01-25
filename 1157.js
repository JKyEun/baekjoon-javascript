const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim()
.toUpperCase().split('').map(x => x.charCodeAt());

const ascii = new Array(26).fill(0);

for (let j = 0; j < input.length; j++) {
    for (let i = 0; i < 27; i++) {
        if (input[j] === i+65) {
            ascii[i]++;
        }
    }
}

let index = 0;
let index2 = 0;

index = ascii.indexOf(Math.max(...ascii));
index2 = ascii.lastIndexOf(Math.max(...ascii));

if (index === index2) {
    console.log(String.fromCharCode(index+65));
} else {
    console.log('?');
}