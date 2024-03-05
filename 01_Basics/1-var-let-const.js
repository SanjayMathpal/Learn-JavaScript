var name = "Sanjay"
let age = 21
const id = 2061921

name = "Name Changed" // name changed because var means global scope
console.log(name);

// age = 20 cannot change because of the same scope

console.log(age)

// id = 20011360 error due to contant keyword

console.log(id);

// -------------------try to avoid using var instead use let-----------