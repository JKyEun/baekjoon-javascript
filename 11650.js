const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = input.shift();
let arr = [];

for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort(function(a, b) {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

for (let i = 0; i < N; i++) {
  arr[i] = arr[i].join(' ');
}

console.log(arr.join('\n'));