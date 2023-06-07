const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);
const [x, y, w, h] = input;

const widthMin = Math.min(w - x, x);
const heightMin = Math.min(h - y, y);

console.log(Math.min(widthMin, heightMin));
