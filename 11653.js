const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
let inputNum = parseInt(input);
let factoArr = [];
let count = 2;
let primeCount = 0;
let isItPrime = false;

while (!isItPrime) {
    if (inputNum == 1) {
        break;
    }

    primeCount = 0;
    for (let i = 1; i <= inputNum; i++) {
        if (inputNum % i == 0) {
            primeCount++;
        }
        if (primeCount > 2) {
            break;
        }
    }
    
    if (primeCount == 2) {
        factoArr.push(inputNum);
        isItPrime = true;
        break;
    }

    if (inputNum % count == 0) {
        factoArr.push(count);
        inputNum = inputNum / count;
        count = 1;
    }
    count++;
}

factoArr.sort(function(a, b)  {
  return a - b;
});

if (inputNum != 1) {
    for (let i = 0; i < factoArr.length; i++) {
        console.log(factoArr[i]);
    }
}