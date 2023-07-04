const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  if (!line) {
    rl.close();
  } else {
    input.push(line);
  }
}).on('close', function () {
  consoleFunc(input);
  process.exit();
});

function consoleFunc(arr) {
  console.log(arr);
}
