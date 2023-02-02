const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n').map(Number);

input.shift();

input.sort(function(a, b)  {
  return a - b;
});

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}