let students = []

function handleClick() {
    const nameData = document.querySelector("#name").value
    const gradeData = document.querySelector("#grade").value
    console.log(nameData, gradeData)
    const student = {
    name: nameData,
    grade: gradeDate
    }
    students.push(student)
}