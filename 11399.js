const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const N = +input.shift();
let people = input.shift().split(' ').map(Number);
let answer = 0;

people = people.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    answer += people[j];
  }
}

console.log(answer);
