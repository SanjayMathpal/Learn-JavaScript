// Singleton
// Object.create

const sym = Symbol("key1")

// Objects Literals 
const obj = {
    name: "Sanjay",
    [sym]: "keyvalue1",
    age: 21,
    city: "Kashipur",
    email: "sanjay@gmail.com",
    "full name": "Sanjay Mathpal"
}

console.log(obj.name)
console.log(obj["name"])

console.log(obj["full name"])
console.log(obj[sym])

// Object.freeze(obj); // now we cannot change the values of object obj

console.log(obj)

obj.newFunction = function() {
    console.log(`hello i am ${this.name}`)
}

console.log(obj.newFunction())