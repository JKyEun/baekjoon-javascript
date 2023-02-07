const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = input.shift();
let members = [];

for (let i = 0; i < N; i++) {
  members.push(input[i].split(' '));
  members[i][0] = parseInt(members[i][0]);
}

members.sort((a, b) => a[0] - b[0]);
members.sort((a, b) => a[1] - b[1]);

for (member of members) {
  console.log(member.join(' '));
}