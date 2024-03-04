const num = 1000
console.log(num)

const num2 = new Number(3000)
console.log(num2)

console.log(num2.toPrecision(2))

// ------------------------Math------------------------

console.log(Math.PI)
console.log(Math.min(2,3))
console.log(Math.max(12,543))
console.log(Math.abs(-23))
console.log(Math.round(23.5))
console.log(Math.floor(23.5))
console.log(Math.ceil(23.5))

console.log(Math.floor((Math.random() * 10 )+ 1))

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)