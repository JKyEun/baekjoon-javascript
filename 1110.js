const fs = require("fs");
let input = parseInt(fs.readFileSync("/dev/stdin").toString());
// input이 한자리인 경우 곱하기 10을 해주기 때문에 여기서는 input을 let으로 선언하였음.

let answer = 0;

if (input < 10 && input != 0) {
    input = input * 10;
} else if (input === 0) {
    answer++;
}
// input이 한자리인 경우 if문을 통해 10을 곱해줌.
// 그러나 예제에서 0의 경우 1을 출력하기 때문에 0이면 여기서 answer변수에 +1을 해주었음.

let oneNum = input % 10;
let tenNum = (input - oneNum) / 10;
let newNum = 0;
// 1의 자리와 10의 자리를 표현해 주고 newNum이라는 변수를 선언해줌.

while (newNum != input) {
    newNum = ((oneNum + tenNum) % 10) + (oneNum * 10);
    oneNum = newNum % 10;
    tenNum = (newNum - oneNum) / 10;
    answer++;
}
// input이 0인 경우 newNum과 input이 같기 때문에 while문이 작동하지 않음.
// newNum이 input과 같아질 때까지 루프가 돌게 됨.
// 루프 안에서는 문제의 내용대로 계속해서 새로운 newNum을 만들어냄.
// 루프가 한번 돌때마다 answer는 1씩 증가함.
// 마침내 newNum과 input이 같아지면 루프가 종료됨.

console.log(answer);