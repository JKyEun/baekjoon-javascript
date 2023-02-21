const fs = require("fs");
const input = +fs.readFileSync("./input.txt").toString().trim();

let num = 666;

let i = 1;
while (i !== input) {
  num++;
  if ((num + "").includes("666")) {
    i++;
  }
}

console.log(num);
