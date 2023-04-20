const name = localStorage.getItem('name')
const image = localStorage.getItem('image')
const use = localStorage.getItem('use')
document.querySelector("#robotName").innerText = name
document.querySelector("#robotImage").innerHTML = `<img id="showRobotImage" src='${image}'>`
document.querySelector("#robotUse").innerText = use

function createRobot() {
    const name = document.querySelector('#name').value
    const image = document.querySelector('#image').value
    const use = document.querySelector('#use').value
    
    localStorage.setItem('name', name)
    localStorage.setItem('image', image)
    localStorage.setItem('use', use)

    document.querySelector("#robotName").innerText = name
    document.querySelector("#robotImage").innerText = image
    document.querySelector("#robotUse").innerText = use
}