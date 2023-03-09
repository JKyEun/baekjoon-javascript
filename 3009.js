const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const threePoint = [];
const x = [];
const y = [];

for (let i = 0; i < 3; i++) {
  threePoint.push(input[i].split(' ').map(Number));
}

for (let i = 0; i < 3; i++) {
  if (x.includes(threePoint[i][0])) {
    x.splice(x.indexOf(threePoint[i][0]), 1);
  } else {
    x.push(threePoint[i][0]);
  }
}

for (let i = 0; i < 3; i++) {
  if (y.includes(threePoint[i][1])) {
    y.splice(y.indexOf(threePoint[i][1]), 1);
  } else {
    y.push(threePoint[i][1]);
  }
}

console.log(x[0], y[0]);
