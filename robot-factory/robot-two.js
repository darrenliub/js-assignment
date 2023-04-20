const nameTwo = localStorage.getItem('nameTwo')
const imageTwo = localStorage.getItem('imageTwo')
const useTwo = localStorage.getItem('useTwo')
document.querySelector("#robotName").innerText = nameTwo
document.querySelector("#robotImage").innerHTML = `<img id="showRobotImage" src='${imageTwo}'>`
document.querySelector("#robotUse").innerText = useTwo

let bodygaurdRobots = []

function createRobot() {
    const nameTwo = document.querySelector('#nameTwo').value
    const imageTwo = document.querySelector('#imageTwo').value
    const useTwo = document.querySelector('#useTwo').value
    
    localStorage.setItem('nameTwo', nameTwo)
    localStorage.setItem('imageTwo', imageTwo)
    localStorage.setItem('useTwo', useTwo)

    document.querySelector("#robotName").innerText = nameTwo
    document.querySelector("#robotImage").innerHTML = imageTwo
    document.querySelector("#robotUse").innerText = useTwo
}