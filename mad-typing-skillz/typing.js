const accuracy = [95, 95, 96, 95, 96, 97, 96, 98, 99, 100, 99]
const wpm = [16, 18, 21, 31, 31, 28, 30, 28, 32, 35, 37]
let fastest = wpm[0]
let mostAccurate = accuracy[0]
let accuracySum = 0
let wpmSum = 0

for (let num = 1; num < wpm.length; num++) {
    if (wpm[num] > fastest) {
        fastest = wpm[num]
    }
}
document.querySelector("#one").innerText = fastest


for (let num = 1; num < accuracy.length; num++) {
    if (accuracy[num] > mostAccurate) {
        mostAccurate = accuracy[num]
    }
}
document.querySelector("#two").innerText = mostAccurate


accuracy.forEach(function (element) {
    accuracySum = accuracySum + element
})
let incompleteAverageAccuracy = accuracySum / accuracy.length
let averageAccuracy = Math.round(incompleteAverageAccuracy)
document.querySelector("#three").innerText = averageAccuracy


wpm.forEach(function (element) {
    wpmSum = wpmSum + element
})
let incompleteAverageWpm = wpmSum / wpm.length
let averageWpm = Math.round(incompleteAverageWpm)
document.querySelector("#four").innerText = averageWpm


document.querySelector("#five").innerText = accuracy[10]


document.querySelector("#six").innerText = wpm[10]