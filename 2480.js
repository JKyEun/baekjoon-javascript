const fs = require("fs");
const input = 
fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const num1 = input[0];
const num2 = input[1];
const num3 = input[2];
const bigNum = Math.max(...input);

if (num1 == num2 && num2 == num3) {
    console.log(10000+(num1*1000));
} else if (num1 == num2 || num1 == num3) {
    console.log(1000+(num1*100));
} else if (num2 == num3) {
    console.log(1000+(num2*100));
} else if (num1 != num2 && num2 != num3 && num1 != num3) {
    console.log(bigNum*100);
}