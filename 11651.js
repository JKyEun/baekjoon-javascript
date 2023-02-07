const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = input.shift();
let arr = [];

for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort(function (a, b) {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

for (let i = 0; i < N; i++) {
  arr[i] = arr[i].join(" ");
}

console.log(arr.join("\n"));
