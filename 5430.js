const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const T = +input.shift();
let answer = '';

for (let i = 0; i < input.length; i += 3) {
  const func = input[i].split('');
  let array = input[i + 2].replace('[', '').replace(']', '').split(',');
  let isError = false;
  let isReverse = false;

  if (input[i + 1] === '0') {
    array = [];
  }

  for (let j = 0; j < func.length; j++) {
    if (func[j] === 'R') {
      isReverse = !isReverse;
    } else {
      if (array.length > 0) {
        if (isReverse) {
          array.pop();
        } else {
          array.shift();
        }
      } else {
        isError = true;
      }
    }
  }

  answer += isError ? 'error\n' : isReverse ? `[${array.reverse()}]\n` : `[${array}]\n`;
}

console.log(answer.trim());
