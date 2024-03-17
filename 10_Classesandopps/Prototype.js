// let myName = "sanjay   "
// let mychannel = "mathpal     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`sanjay is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`sanjay says hello`);
}

// heroPower.sanjay()
// myHeros.sanjay()
// myHeros.heySanjay()
// heroPower.heySanjay()

// inheritance

const User = {
    name: "sanjay",
    email: "sanjay@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "sanjaymathpal     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()