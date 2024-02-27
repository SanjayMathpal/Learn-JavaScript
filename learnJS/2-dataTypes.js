// Primitive data types  ->  call by value

// number -> integer
// bigInt -> big integer
// string -> "something"
// boolean -> true/false
// null -> standalone value
// undefined
// symbol 

let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id === anotherId)

console.log(typeof(null)) // object
console.log(typeof(undefined)) // undefined

// Non-primitive data types   ->   call by reference

// 1. objects

let person = {
    firstName: "Luiza",
    lastName: "Shaikh",
};

// 2. Array

let a = new Array();
let b = new Array(10);
let d = new Array(1, 2, 3, "Hello");


// Primitive	                                    Non-Primitive
// Primitive Data types are predefined. 	        Non-Primitive data types are created by the programmer
// Primitive Data types will have certain values.	Non-Primitive data types can be NULL.
// Size depends on the type of data structure.	    Size is not fixed
// Examples are numbers and strings.	            Examples are Array and Linked List.
// It can start with a lowercase.	                It can start with uppercase.