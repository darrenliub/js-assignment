// localStorage.setItem('pet', 'dog')
// localStorage.setItem('petAge', 6)
// localStorage.setItem('petName', 'cathy')

const pet = localStorage.getItem('pet')
const petName = localStorage.getItem('petName')
const petAge = localStorage.getItem('petAge')
console.log(pet)
console.log(petName)
console.log(petAge)

function updatePet() {
    const pet = document.querySelector('#pet').value
    const petName = document.querySelector('#petName').value
    const petAge = document.querySelector('#petAge').value
    
    localStorage.setItem('pet', pet)
    localStorage.setItem('petName', petName)
    localStorage.setItem('petAge', petAge)

    console.log(pet)
    console.log(petName)
    console.log(petAge)
}

const data = [
    {
        name: 'Jennifer',
        grade: 10
    },
    {
        name: 'Evan',
        grade: 10
    },
]

const stringData = JSON.stringify(data)

localStorage.setItem('studentArray', stringData)

const gotData = localStorage.getItem('studentArray')

console.log(gotData[0])

const convertedData = JSON.parse(gotData)

console.log(convertedData[0])
console.log(convertedData[0].name)