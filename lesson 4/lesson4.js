function alleyOop() {
    document.write('Jennifer got the ball')
    document.write('Markus made a great aerial pass')
    document.write('Jennifer dunked over Jeff')
    console.log(true)
}

function one() {
    document.write('oi')
    document.write('Evan')
}

function two() {
    document.write('oi')
    document.write('Darren')
}

alleyOop()
one()
two()
alleyOop()

function reject(player) {
    document.write(player + ' was rejected!')
    console.log(false)
}

function add3(num) {
    const theNum = parseInt(num)
    const answer = theNum + 3
    console.log('answer is ' + answer)
}

function multiply(num1, num2){
    const answer = num1 * num2
    console.log(`${num1} x ${num2} = ${answer}`)
}

reject("Jeff")
reject('MK')
add3(1)
multiply(5,18)
multiply(3,8)

function hi(person1, person2) {
    document.write('Hello ' + person1 + ' and ' + person2)
    document.write('<br>')
}

hi('Evan', 'Darren')

function math(num1) {
    const answer = ((num1 + 3) * 3 / 2)
    document.write(`(${num1} + 3) x 3 / 2 = ${answer}`)
}

math(1)

function sayHi(){
    console.log('hi')
}

function sayBye(){
    console.log('bye!')
}

setTimeout(sayHi, 1000)

setInterval(sayBye, 2000)


setTimeout(multiply, 2000)