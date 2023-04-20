const data = [
    {
        name: 'Skyler',
        grade: 9
    },
    {
        name: 'Cindy',
        grade: 9
    },
    {
        name: 'Natasha',
        grade: 10
    },
    {
        name: 'Angus',
        grade: 11
    },
]

data.forEach(function(element) {
    console.log(element)
    document.querySelector('.students').innerHTML += `
    <h2>${element.name}</h2>
    <p>${element.grade}</p>
    `
})