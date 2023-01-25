const fs = require("fs");
const input = parseInt(fs.readFileSync("./input.txt").toString().trim());
// ex) 110
const inputArr = input.toString().split('').map(Number);
// ex) [1, 1, 0]

let count = 0;

function equal(inputArr) {
    if (inputArr.length < 3) {
        console.log(input);
    } else if (inputArr.length >= 3) {
        for (let i = 100; i <= input; i++) {
            let arr2 = i.toString().split('').map(Number);
            if ((arr2[0] - arr2[1]) === (arr2[1] - arr2[2])) {
                count++;
            }
        }
        console.log(count+99);
    }
}

equal(inputArr);