const input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const king = parseInt(input[0]);
const queen = parseInt(input[1]);
const look = parseInt(input[2]);
const bishop = parseInt(input[3]);
const knight = parseInt(input[4]);
const phone = parseInt(input[5]);

console.log(1-king, 1-queen, 2-look, 2-bishop, 2-knight, 8-phone);