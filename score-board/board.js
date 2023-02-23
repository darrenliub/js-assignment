let seconds = 60
let minutes = 11
let score1 = 0
let score2 = 0
let periodNumber = 0
let shotNumber = 24

function resetGame() {
    score1 = 0
    document.querySelector("#score1").innerText = score1
    score2 = 0
    document.querySelector("#score2").innerText = score2
    periodNumber = 0
    document.querySelector("#periodNumber").innerText = periodNumber
    clearInterval(numInterval)
    minutes = 11
    seconds = 60
    document.querySelector("#seconds").innerText = '00'
    document.querySelector("#minutes").innerText = '12'
    shotNumber = 24
    document.querySelector("#shotNumber").innerText = shotNumber
}

function timerCount() {
    seconds--
    if (seconds == 0) {
        minutes--
        seconds = 60
    }
    if (minutes == 0) {
        minutes = 11
    }
    document.querySelector("#seconds").innerText = seconds
    document.querySelector("#minutes").innerText = minutes
}

function startTimer() {
    numInterval = setInterval(timerCount, 1000)
}

function stopTimer() {
    clearInterval(numInterval)
}

function resetTimer() {
    clearInterval(numInterval)
    minutes = 11
    seconds = 60
    document.querySelector("#seconds").innerText = '00'
    document.querySelector("#minutes").innerText = '12'
}

function scorePlus() {
    score1++
    document.querySelector("#score1").innerText = score1
}

function scoreMinus() {
    score2++
    document.querySelector("#score2").innerText = score2
}

function periodPlus() {
    periodNumber++
    if (periodNumber > 4) {
        periodNumber = 0
    }
    document.querySelector("#periodNumber").innerText = periodNumber
}

function periodMinus() {
    periodNumber--
    if (periodNumber < 0) {
        periodNumber = 0
    }
    document.querySelector("#periodNumber").innerText = periodNumber
}

function shotCount() {
    shotNumber--
    if (shotNumber < 0) {
        shotNumber = 0
    }
    document.querySelector("#shotNumber").innerText = shotNumber
}

function stopShot() {
    clearInterval(numInterval)
}

function startShot() {
    numInterval = setInterval(shotCount, 1000)
}

function resetShot() {
    clearInterval(numInterval)
    shotNumber = 24
    document.querySelector("#shotNumber").innerText = shotNumber
}