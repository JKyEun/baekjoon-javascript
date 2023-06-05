const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const N = +input[0];
const teamNum = N / 2;
const stats = input.slice(1).map(str => str.split(' ').map(Number));

let isVisited = new Array(N);
const start = [];
let link = [];
let min = Infinity;

function dfs(cnt) {
  if (cnt === teamNum) {
    link = [];
    let startSum = 0;
    let linkSum = 0;

    for (let i = 0; i < N; i++) {
      if (!start.includes(i)) {
        link.push(i);
      }
    }

    for (let j = 0; j < teamNum - 1; j++) {
      for (let k = j + 1; k < teamNum; k++) {
        startSum += stats[start[j]][start[k]] + stats[start[k]][start[j]];
        linkSum += stats[link[j]][link[k]] + stats[link[k]][link[j]];
      }
    }

    const diff = Math.abs(startSum - linkSum);
    min = Math.min(diff, min);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isVisited[i] === true) continue;
    isVisited[i] = true;
    start.push(i);
    dfs(cnt + 1);
    start.pop();
    isVisited[i] = false;
  }
}

dfs(0);

console.log(min);
