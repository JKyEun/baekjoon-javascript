const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const remainder = input.map((x) => x % 42);

const setRemainder = [...new Set(remainder)];

console.log(setRemainder.length);
