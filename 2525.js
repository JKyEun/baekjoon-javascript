const fs = require("fs");
const input =
fs.readFileSync("/dev/stdin").toString().trim().replace("\n", " ").split(' ');

const H = parseInt(input[0]);
const M = parseInt(input[1]);
const cookMin = parseInt(input[2]);

if ((M+cookMin)<60) {
    console.log(H, M+cookMin);
} else if ((M+cookMin)>=60 && H+(Math.floor((M+cookMin)/60))<24) {
    console.log(H+(Math.floor((M+cookMin)/60)), (M+cookMin)%60);
} else if ((M+cookMin)>=60 && H+(Math.floor((M+cookMin)/60))>=24) {
    console.log(H+(Math.floor((M+cookMin)/60)-24), (M+cookMin)%60);
}