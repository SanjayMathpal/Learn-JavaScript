const name = "Sanjay"
const age = 21

console.log("Hello my name is " + name + " and i am " + age + " years old") // not a good way

console.log(`Hello my name is ${name} and i am ${age} years old`) // modern method

const anotherName = new String("Hello")

console.log(anotherName.toUpperCase())
console.log(anotherName.charAt(3))
console.log(anotherName.length)
console.log(anotherName.slice(1,3))
console.log(anotherName.substring(-5,3))

const temp = "   sanjay   "
console.log(temp)

console.log(temp.trim())

const sentence = "this is a testing sentence"
console.log(sentence.split(" "))