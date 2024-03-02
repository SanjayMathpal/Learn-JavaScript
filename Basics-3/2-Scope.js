// there are three types of variables

var a = 100; // scope is globle
let b = 200; // scope is local
const c = 300; // scope is global but a constant value

if(true){
    a = 400;
    b = 500;
    // c = 600;
}

console.log(a);
console.log(b);
console.log(c);