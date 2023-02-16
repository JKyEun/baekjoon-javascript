const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);