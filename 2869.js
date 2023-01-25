const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(' ');

const upInDay = parseInt(input[0]);
const downInNight = parseInt(input[1]);
const UpInOneDay = upInDay - downInNight;
const totalHeight = parseInt(input[2]);
let answer = 0;

answer = Math.ceil((totalHeight - upInDay) / UpInOneDay);
answer++;

console.log(answer);