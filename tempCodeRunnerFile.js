const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().toUpperCase().split('').map(x => x.charCodeAt());

console.log(input);