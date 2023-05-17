const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');

if (input > 89) {
  console.log('A');
} else if (input > 79 && input < 90) {
  console.log('B');
} else if (input > 69 && input < 80) {
  console.log('C');
} else if (input > 59 && input < 70) {
  console.log('D');
} else {
  console.log('F');
}
