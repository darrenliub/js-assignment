const student1 = "Markus"
const student2 = "Jennifer"
const student3 = "Evan"
const student4 = "Skyler"

const students = ["Markus", "Jennifer", "Evan"]
console.log(students[2])

const numbers = [51, 36, 6, 1, 0, 43]
console.log(numbers[3])

const randomNumbers = [3, 4, 6, 9, 2]
randomNumbers.push(7)
randomNumbers.push(8)
console.log(randomNumbers)
randomNumbers.pop()
randomNumbers.pop()
console.log(randomNumbers)

const randomThings = [32, "chocolate", true]

function sayHi() {
    console.log('hi')
    return 5
}

const food = ["strawberry", "crepe", "chocolate mochi Bread"]
food.push("Turkish sutlac")
food.push("kimchi")
document.write(food[4])
document.write("<br>")

const enemies = ["Evan ", "Cockroach ", "talking to the waiter "]
const removedEnemy = enemies.pop()
document.write(removedEnemy + "has been destroyed")