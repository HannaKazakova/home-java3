//1

for(let i = 1; i <= 50; i++ ) {
    if(i == 0)break;
    console.log(i);
}

for(let j = 35; j <= 35; j-- ) {
    if(j == 7)break;
    console.log(j);
}



//3

let b = 100;
let c = 0;
for(let i = 0; i <= b; i++){
    c += i;
}
console.log(c);


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

//2

i = 89;
while( i >= 11) {
    document.write(i + '<br/>');
    i--;
}

//5

let f = 0;
for(let f = 8; f <= 56; f++){
if(f % 2 == 1)continue;
console.log(f);
}

let g = 8;
while( g <= 56 ){
    if(g % 2 != 0){
        g++;
    } else{
    console.log(g);
    g++;
}
}
//6
for(let t = 2; t <=10; t++){
    sum = 0;
    for(let d = 1; d <=10; d++){
        sum = t * d;
        console.log(t + " * " + d + " = " + sum);
    }
}





