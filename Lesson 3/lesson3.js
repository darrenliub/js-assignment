let num = 3
let student = "Cindy"
let doorOpen = false
let myNum = 0

while (doorOpen === false) {
    console.log('open the door')
    doorOpen = true
}

while (num === 3) {
    num = num + 1
    num++
}

while (myNum < 5) {
    myNum++
    console.log(myNum)
}

for (i = 0; i < 50; i++) {
    for (j = 0; j < 5; j++) {
        console.log(j)
    }
}


for (a = 10; a > 0; a--) {
    console.log('we are counting down')
    console.log(a)
}