const date = new Date()
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toDateString())
console.log(date.toLocaleString())

const myCreatedDate = new Date(2024,1,29,15,44,23)
console.log(myCreatedDate.toLocaleString())

console.log(date.getDate())
console.log(date.getDay())
console.log(date.getSeconds())