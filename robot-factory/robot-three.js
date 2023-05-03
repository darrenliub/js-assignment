class CustomRobot {
    constructor(nameThree, imageThree, useThree) {
        this.name = nameThree
        this.image = imageThree
        this.use = useThree
    }
}

// get local storage data
const customRobotFromLocalStorage = localStorage.getItem('customRobots')
const convertedData = JSON.parse(customRobotFromLocalStorage)

// set customRobots equal to that data
// if there is data, make customRobots that data
// else, make customRobots an empty array

let customRobots

if (convertedData) {
    customRobots = convertedData
}

if (convertedData === null) {
    customRobots = []
}


// add your for loop to pre-populate the page with the saved robots
customRobots.forEach(function (element){
    document.querySelector("#rightDiv").innerHTML += 
    `
        <p id="robotName">${element.name}</p>
        <div id="robotImage"><img id="showRobotImage" src='${element.image}'></div>
        <p id="robotUse">${element.use}</p>
`
})

function createRobot() {
    const nameThree = document.querySelector('#nameThree').value
    const imageThree = document.querySelector('#imageThree').value
    const useThree = document.querySelector('#useThree').value

    const cRobot = new CustomRobot(nameThree, imageThree, useThree)

    // add the object to the array
    customRobots.push(cRobot)

    // make sure to stringify   
    const stringCustomRobots = JSON.stringify(customRobots)

    // save to localstorage
    localStorage.setItem('customRobots', stringCustomRobots)

    document.querySelector("#rightDiv").innerHTML = ""

    customRobots.forEach(function (element){
        document.querySelector("#rightDiv").innerHTML += 
        `
            <p id="robotName">${element.name}</p>
            <div id="robotImage"><img id="showRobotImage" src='${element.image}'></div>
            <p id="robotUse">${element.use}</p>
    `
    })
}

// const destroyRobot = customRobots.filter(function(element) {
//     return element !== 'destroy'
// })

// function destroyRobot() {
//     return element !== 'destroy'
// }