// convert to number

let name = "Sanjay"
let some = ""
console.log(typeof name)
console.log(Number(name))

// "33" => 33
// "33abc" => NaN
// undefined => NaN
// "sanjay" => NaN
// true => 1 false => 0

console.log(Boolean(name))
console.log(Boolean(some))

// "" => false
// "sanjay" => true

console.log(String(name))
console.log(String(some))

// According to ECMA guidelines

console.log(1+2) // 3
console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+2+2) // 122
console.log(1+2+"2") // 32