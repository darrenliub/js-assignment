const students = ["Jen", "Evan", "Darren", "Nat", "MK", "Cindy"]

console.log(students.length)

students.shift()

students.unshift("Jeff")

students.splice(3, 1)


const desserts = ["strawberry", "crepe", "chocolate mochi Bread", "Turkish sutlac"]

desserts.splice(1, 1)

desserts.unshift("kimchi")


const numbers = [1, 2, 3, 4, 5]

numbers.splice(1, 3)


const veg = ["broccoli", "lettuce", "carrot"]

veg.forEach(function (element) {
    console.log(element)
})

function showAllElements(element) {
    console.log(element)
}


const threeNumbers = [1, 2, 3]

let sum = 0

threeNumbers.forEach(function (element) {
    sum = sum + element
    console.log(sum)
})



const twoDArray = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]