const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const K = +input.shift();
const direction = [];
let width = 0;
let height = 0;
let num = 0;

for (let i = 0; i < input.length; i++) {
  direction.push(input[i].split(' ').map(Number));
  if (direction[i][0] === 1) {
    width += direction[i][1];
  } else if (direction[i][0] === 2) {
    width += direction[i][1];
  } else if (direction[i][0] === 3) {
    height += direction[i][1];
  } else if (direction[i][0] === 4) {
    height += direction[i][1];
  }
}

let curX = width;
let curY = height;

for (let i = 0; i <= height; i++) {
  const arr = new Array(width + 1).fill(false);
  area.push(arr);
}

for (let i = 0; i < 6; i++) {
  if (direction[i][0] === 1) {
    for (let j = 0; j < direction[i][1]; j++) {
      area[curY][curX + j] = true;
    }
    curX += direction[i][1];
  } else if (direction[i][0] === 2) {
    for (let j = 0; j < direction[i][1]; j++) {
      area[curY][curX - j] = true;
    }
    curX -= direction[i][1];
  } else if (direction[i][0] === 3) {
    for (let j = 0; j < direction[i][1]; j++) {
      area[curY + j][curX] = true;
    }
    curY += direction[i][1];
  } else if (direction[i][0] === 4) {
    for (let j = 0; j < direction[i][1]; j++) {
      area[curY - j][curX] = true;
    }
    curY -= direction[i][1];
  }
}

let isIn = false;

for (let i = 0; i <= height; i++) {
  for (let j = 0; j <= width; j++) {
    if (area[i][j]) {
      isIn = !isIn;
      num++;
    } else if (isIn) {
      area[i][j] = true;
      num++;
    }
  }
}

console.log(area);
