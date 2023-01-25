const fs = require("fs");
const input = parseInt(fs.readFileSync("./input.txt").toString());

for (let i = 1; i <= input; i++) {
    console.log(' '.repeat(input-i) + '*'.repeat(i));
}