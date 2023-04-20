// const nameThree = localStorage.getItem('nameThree')
// const imageThree = localStorage.getItem('imageThree')
// const useThree = localStorage.getItem('useThree')
// document.querySelector("#robotName").innerText = nameThree
// document.querySelector("#robotImage").innerHTML = `<img id="showRobotImage" src='${imageThree}'>`
// document.querySelector("#robotUse").innerText = useThree

// create your robot Class
class CustomRobot {
    constructor(nameThree, imageThree, useThree) {
        this.name = nameThree
        this.image = imageThree
        this.use = useThree
    }}

let customRobots = []

function createRobot() {
    const nameThree = document.querySelector('#nameThree').value
    const imageThree = document.querySelector('#imageThree').value
    const useThree = document.querySelector('#useThree').value

    console.log('nameThree', nameThree)
    console.log('imageThree', imageThree)
    console.log('useThree', useThree)


    const cRobot = new CustomRobot(nameThree, imageThree, useThree)
    console.log('new custom robot', cRobot)

    // add the object to the array
    customRobots.push(cRobot)

    // save to localstorage
    localStorage.setItem(customRobots, stringCustomRobots)

    // make sure to stringify
    const stringCustomRobots = string.stringify(customRobots)
    
    // localStorage.setItem('nameThree', nameThree)
    // localStorage.setItem('imageThree', imageThree)
    // localStorage.setItem('useThree', useThree)

    // document.querySelector("#robotName").innerText = nameThree
    // document.querySelector("#robotImage").innerHTML = imageThree
    // document.querySelector("#robotUse").innerText = useThree

    // data.forEach(function(element) {
    //     document.querySelector('.rightDiv').innerHTML += `
    //     <p id="robotName"></p>
    //     <div id="robotImage"></div>
    //     <p id="robotUse"></p> 
    //     `
    // })
}
