const marvel_heros = ["Iron Man","Captain America","Hulk"]
const dc_heros = ["Superman","Batman","Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[3][2])

// const newArray = marvel_heros.concat(dc_heros)
// console.log(newArray)

const all_heros = [...marvel_heros,...dc_heros] // can merge multiple arrays
console.log(all_heros)

const nestedArray = [1,2,3,[4,5,6,[7,8,9]]]
console.log(nestedArray.flat(3))