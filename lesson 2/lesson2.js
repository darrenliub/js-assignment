console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)

console.log(5 % 3)

console.log(1 + ( 2 - 3 ) * 4)


let num1 = prompt ('choose a number')
let num2 = prompt ('choose a number')
let num3 = prompt ('choose a number')
let num4 = prompt ('choose a number')
let num5 = prompt ('choose a number')

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)
num4 = parseInt(num4)
num5 = parseInt(num5)

console.log(`${num1} + ${num2} + ${num3} + ${num4} + ${num5} = ${num1 + num2 + num3 + num4 + num5}`)
console.log(`${num1} + ${num2} * ${num3 + num4} - ${num5} = ${num1 + num2 * num3 + num4 - num5}`)


const num6 = prompt ('choose a number')

if (10 <= num6) {
    console.log('big number')
}
if (5 >= num6) {
    console.log('small number')
}
if (10 >= num6 && num6 >= 5) {
    console.log('medium number')
}


const person1 = prompt('who are you?')

if(person1 === "Jeff") {
    console.log('you are an artist!')
} else {
    console.log('you are not Jeff!')
}



const person2 = prompt('who are you?')

if(person2 === "Sam") {
    console.log('you are a chess master!')
} else if (person2 === "MK"){
    console.log('you are a musician!')
} else if (person2 === "Judy"){
    console.log('you are sleepy!')
} else {
    console.log('you are nobody!')
}