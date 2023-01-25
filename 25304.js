const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');
// 줄바꿈을 기준으로 배열로 잘라 입력받는다.

const totalPrice = Number(input[0]);
const itemNumber = Number(input[1]);
// 총 금액과 품목의 개수는 따로 변수로 설정했다.

let sum = 0;
for (let i = 2; i < itemNumber+2; i++) {
    let newArr = input[i].split(' ');
    sum += newArr[0]*newArr[1];
}
// sum이라는 변수를 설정해두고 거기에 총 금액과 비교할 값을 집어넣었다.
// 가격과 개수는 newArr라는 새 배열을 만들어 잘라넣을 수 있었고 이를 이용해 계산했다.

if (sum == totalPrice) {
    console.log("Yes");
} else {
    console.log("No");
}
// 총 금액과 계산한 금액이 같으면 Yes, 다르면 No를 출력하도록 하였다.