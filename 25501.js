const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');
const T = input.shift();
let count = 0;

function recursion(s, l, r) {
  count++;
  if (l >= r) {
    return 1;
  } else if (s[l] != s[r]) {
    return 0;
  } else {
    return recursion(s, l+1, r-1);
  }
}

for (let i = 0; i < T; i++) {
  console.log(recursion(input[i], 0, input[i].length-1), count);
  count = 0;
}