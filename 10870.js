const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
const inputNum = parseInt(input);

function fibo(num) {
  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  }
  return fibo(num-2) + fibo(num-1);
}

console.log(fibo(inputNum));