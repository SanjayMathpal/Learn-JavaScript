// IIFE => immidiately invoked function expression

// ()()

(function addtwo(num1,num2){
    console.log(num1+num2)
})(1,4); // put semi colon to end this function and start new one

( () => {
    console.log("arrow function")
})()