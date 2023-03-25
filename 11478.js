const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim();

const set = new Set();

for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    set.add(input.slice(j, j + i));
  }
}

console.log(set.size);
