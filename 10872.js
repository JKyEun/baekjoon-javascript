const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const inputNum = parseInt(input);

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(inputNum));