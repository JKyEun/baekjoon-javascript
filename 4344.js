const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let caseArr = input[i].trim().split(' ').map(Number);
    let sumScore = 0;
    let highStudent = 0;
    for (let j = 1; j <= caseArr[0]; j++) { // 첫번째 for문
        sumScore += caseArr[j]
    }
    for (let k = 1; k <= caseArr[0]; k++) { // 두번째 for문
        if (caseArr[k] > (sumScore / caseArr[0])) {
            highStudent++;
        }
    }
    let percentage = (highStudent / caseArr[0]) * 100
    console.log(percentage.toFixed(3) + "%")
}