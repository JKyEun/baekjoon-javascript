const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const caseNum = +input.shift();

for (let i = 0; i < caseNum; i++) {
  const [N, M] = input.shift().split(' ').map(Number);
  const queue = input.shift().split(' ').map(Number);
  const queueObjArr = [];
  let maxNum;
  let printedNum;
  let bool = true;
  let count = 0;

  for (let j = 0; j < N; j++) {
    queueObjArr.push({ value: queue[j], index: j });
  }
  while (bool) {
    maxNum = Math.max(...queue);

    if (queue[0] >= maxNum) {
      queue.shift();
      printedNum = queueObjArr[0].index;
      queueObjArr.shift();
      count++;
    } else {
      queue.push(queue.shift());
      queueObjArr.push(queueObjArr.shift());
    }

    if (printedNum === M) {
      console.log(count);
      bool = false;
    }
  }
}
