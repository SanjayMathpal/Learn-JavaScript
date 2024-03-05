// this keyword works on object not in function

const obj = {
    name: "Sanjay",
    age: 21,
    WelcomeMessage: function(){
        // console.log(this.name)
        // console.log(this)
    }
}
obj.WelcomeMessage()

// console.log(this)

function num(){
    const name = "sanjay"
    console.log(this.name)
}

num();

// ----------------Arrow Functions-----------------

const addTwo = (num1,num2) => {
    return num1+num2
}
const addThree = (num1,num2,num3) => num1+num2+num3

// const obj1 = () => {name: "sanjay"}
const obj1 = () => ({name: "sanjay"})
console.log(obj1())
