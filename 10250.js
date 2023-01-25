const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const inputNum = input[0];
let floor = 0;
let distance = 0;
let eachCase = '';
let answer = '';

for (let i = 1; i <= inputNum; i++) {
    eachCase = input[i].trim().split(' ');
    floor = eachCase[2] % eachCase[0];
    if (floor == 0) {
        floor = eachCase[0];
    }
    distance = Math.ceil(eachCase[2] / eachCase[0]);
    if (distance < 10) {
        String(distance);
        distance = '0' + distance;
    }
    answer = String(floor)+String(distance);
    console.log(parseInt(answer));
}