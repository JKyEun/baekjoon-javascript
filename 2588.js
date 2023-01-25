const fs = require('fs')
const [num1, num2] = fs.readFileSync('dev/stdin').toString()
.split('\n').map(Number);

const onenum = num2 % 10;
const tennum = Math.floor((num2 % 100) / 10);
const hunnum = Math.floor(num2 / 100);

console.log(num1 * onenum);
console.log(num1 * tennum);
console.log(num1 * hunnum);
console.log(num1 * num2);