const arr = [1,2,3,4]
const arr1 = [1,"asdfh",132,123,null,undefined,true,false]

// console.log([arr,arr1])

const arr2 = new Array(1,2,3,4)
console.log(arr2[2])

arr2.push(45)
console.log(arr2)

arr2.unshift(10)
console.log(arr2) // push in front of the array
arr2.shift()
console.log(arr2) 

console.log(arr2.includes(2))

// arr.join chage the data type from object to string

// slice and splice

// slice print the array from the range of starting index to less than ending index 
// but in splice it includes the last index as well and also removes the values from the original array

const A = [1,2,3,4,5,6]
console.log(A.slice(1,3))
console.log(A)
console.log(A.splice(1,3))
console.log(A)