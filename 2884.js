const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().split(' ');

const H = parseInt(input[0]);
const M = parseInt(input[1]);

if (M>=45){
    console.log(H, M-45);
} else if (M<45 && H!=0){
    console.log(H-1, (60+M)-45);
} else if (M<45 && H==0){
    console.log(23, (60+M)-45);
}