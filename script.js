//1

for(let i = 1; i <= 50; i++ ) {
    if(i == 0)break;
    console.log(i);
}

for(let j = 35; j <= 35; j-- ) {
    if(j == 7)break;
    console.log(j);
}

//4

let a = 5;
let sum = 0;
for(let i = 1; i <= a; i++ ){
    sum = 0;
    for(let j = 1; j <= i; j++ ){
        sum+=j;
    }
    console.log('Sum' + i + '=' + sum);
}  

//3

let b = 100;
//let sum = 0;
for(let i = 0; i <= b; i++){
    sum += i;
}
console.log(sum);