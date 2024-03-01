
function name() {
    console.log('S')
    console.log('A')
    console.log('N')
    console.log('J')
    console.log('A')
    console.log('Y')
}
name()

function addTwoNumbers(num1, num2){
    console.log(num1+num2)
}
addTwoNumbers(1,2);

// REST and SPREAD operator

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr = [...arr1,...arr2] // spread

console.log(arr)

function arry(...numbers){ // rest
    return numbers
}
const list = arry(1,2,3,4,5,6)
console.log(list)