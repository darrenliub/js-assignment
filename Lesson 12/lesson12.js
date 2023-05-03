// const data = [
//     {
//         name: 'Skyler',
//         grade: 9
//     },
//     {
//         name: 'Cindy',
//         grade: 9
//     },
//     {
//         name: 'Natasha',
//         grade: 10
//     },
//     {
//         name: 'Angus',
//         grade: 11
//     },
// ]

// data.forEach(function(element) {
//     console.log(element)
//     document.querySelector('.students').innerHTML += `
//     <h2>${element.name}</h2>
//     <p>${element.grade}</p>
//     `
// })

const music = ['piano', 'violin', 'trumpet', 'flut', 'cello']

const filteredMusic = music.filter(function(element) {
    console.log('we are on element:', element)
    return element !== 'trumpet'
})

const number = [1, 2, 3, 4, 5]

const filteredNumber = number.filter(function(element) {
    console.log(element)
    return element !== '2'
})