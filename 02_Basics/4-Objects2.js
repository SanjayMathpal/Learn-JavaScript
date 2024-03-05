const user = {}

user.name = "sanjay"
user.age = 21

console.log(user)

const user2 = {
    name: {
        first_name: "sanjay",
        second_name: "mathpal"
    },
    age: 21,
    email: "sanjay@gmail.com"
}

console.log(user2.name.first_name)

// Merge Objects

const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'c',
    4: 'd'
}
// obj3 = {obj1, obj2}
// obj3 = Object.assign({},obj1,obj2) // hard
obj3 = {...obj1,...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        name: "name1"
    },
    {
        id: 2,
        name: "name2"
    }
]
console.log(users)

console.log(Object.keys(user))
console.log(Object.values(user))


// Destructuring

const obj5 = {
    name: "something",
    age: 21,
}

const {name: n} = obj5
console.log(n)


// const nav = ({props}) => {

// }
// console.log(nav())


// JSON

// {
//     "name": "Sanjay",
//     "age": 21
// }