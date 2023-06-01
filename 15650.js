const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ');
const N = +input.shift();
const M = +input.shift();

const isVisited = new Array(N);
let output = [];
let result = '';

function dfs(cnt) {
  if (cnt === M) {
    result += `${output.join(' ')}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isVisited[i] === true) continue;
    isVisited[i] = true;
    output.push(i + 1);
    dfs(cnt + 1);
    output.pop();
    isVisited[i] = false;
  }
}

dfs(0);

const resultArr = result
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number))
  .map(el => el.sort().join(' '));

const answer = [...new Set(resultArr)];

console.log(answer.join('\n'));
