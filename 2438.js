const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString());

for (let i = 1; i <= input; i++) {
    console.log('*'.repeat(i));
}