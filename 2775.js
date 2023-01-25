const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n').map(Number);
let answerArr = [];
let maxN = 0;
for (let i = 2; i <= 2 + input[0]; i+=2) { // 가장 큰 N의 크기 찾기
    if (input[i] > maxN) {
        maxN = input[i];
    }
}

let zeroFloor = []; // 0층 숫자 세팅
for (let i = 1; i <= maxN; i++) {
    zeroFloor.push(i);
}
answerArr.push(zeroFloor);

let maxK = 0;
for (let i = 1; i <= 1 + input[0]; i+=2) { // 가장 큰 K의 크기 찾기
    if (input[i] > maxK) {
        maxK = input[i]
    }
}

let newFloor = [];
for (let j = 1; j <= maxK; j++) { // 0으로 채워넣어 이중배열 완성
    newFloor = [];
    for (let i = 0; i < maxN; i++) {
        newFloor.push(0);
    }
    answerArr.push(newFloor);
}

let prevFloor = [];
let humanNum = 0;
for (let i = 1; i <= maxK; i++) { // 이중배열 안 0들을 알맞은 숫자로 바꾸기
    prevFloor = [];
    for (let j = 0; j < maxN; j++) {
        prevFloor.push(answerArr[i-1][j]);
        humanNum = prevFloor.reduce((acc, cur) => acc + cur, 0);
        answerArr[i][j] = humanNum;
    }
}

for (let i = 1; i < input.length; i+=2) {
    console.log(answerArr[input[i]][(input[i+1])-1]); // 입력에 따라 출력
}