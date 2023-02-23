let sayHiMany
let num = 0

function stop(){
    clearInterval(sayHiMany)
}

function start(){
    numInterval = setInterval(addNum, 1000)
}

function reset(){
    num = 0
    clearInterval(numInterval)
}

function addNum(){
    num++
    console.log(num)
}

function sayHi() {
    console.log('hi')
}

function writeOnScreen() {
    document.querySelector(".story").innerText = "new story!"
    document.querySelector(".story").innerHTML = "<h1>new story!<h1>"

    document.getElementById("story").innerHTML = "<h1>new story!<h1>"

}