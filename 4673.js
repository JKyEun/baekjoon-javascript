function d(num) {
    const numSum = 
num.toString().trim().split('').map(Number).reduce((prev, cur) => prev + cur, 0);
    return num + numSum;
}

let arr = []; 

for (let i = 0; i <= 10000; i++) {
    arr.push(d(i))
}

for (let i = 0; i <= 10000; i++) {
    if(arr.indexOf(i) === -1) {
        console.log(i);
    }
}