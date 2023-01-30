const sex = prompt("male or female")

if (sex === "male") {
    const hair = prompt("short Hair 1~~~10 long Hari")
    if (5 < hair) {
        console.log('Your hair is too long. (5 points)')
    }
    if (5 > hair) {
        console.log('Your hair is too short. (0 points)')
    }
    if (6 > hair && hair > 4) {
        console.log('Your hair is perfect. (10 points)')
    }

    const personality = prompt("bad Personality 1~~~10 good Personality")
    if (5 < personality) {
        console.log('You are a good person. (10 points)')
    }
    if (5 > personality) {
        console.log('You are a bad person. (0 points)')
    }
    if (6 > personality && personality > 4) {
        console.log('You are a soso person. (5 points)')
    }

    const money = prompt("Poor 1~~~10 Rich")
    if (5 < money) {
        console.log('You have a lot of money. (10 points)')
    }
    if (5 > money) {
        console.log('You dont have any money. (0 points)')
    }
    if (6 > money && money > 4) {
        console.log('You have an acceptable amount of money. (5 points)')
    }

    let Hpoints =prompt("How many points did you get on Hair?")
    let Ppoints =prompt("How many points did you get on Personality?")
    let Mpoints =prompt("How many points did you get on Money?")
    Hpoints = parseInt(Hpoints)
    Ppoints = parseInt(Ppoints)
    Mpoints = parseInt(Mpoints)

    const Apoints = (Hpoints + Ppoints + Mpoints)

    console.log(`You are ${Apoints}/30 atractive!`)


} else if (sex === "female") {
    const hair = prompt("short Hair 1~~~10 long Hair")
    if (5 < hair) {
        console.log('Your hair is too long. (5 points)')
    }
    if (5 > hair) {
        console.log('Your hair is too short. (0 points)')
    }
    if (6 > hair && hair > 4) {
        console.log('Your hair is perfect. (10 points)')
    }

    const beauty = prompt("Ugly 1~~~10 Beautiful")
    if (5 < beauty) {
        console.log('You are pretty. (10 points)')
    }
    if (5 > beauty) {
        console.log('You make me want to throw up. (0 points)')
    }
    if (6 > beauty && beauty > 4) {
        console.log('You look ok. (5 points)')
    }

    const mommy = prompt("no Gifts 1~~~10 a lot of Gifts")
    if (5 < mommy) {
        console.log('You are a qualified sugar mommy. (10 points)')
    }
    if (5 > mommy) {
        console.log('You are not a sugar mommy. (0 points)')
    }
    if (6 > mommy && mommy > 4) {
        console.log('You are an acceptable sugar mommy. (5 points)')
    }

    let Hpoints =prompt("How many points did you get on Hair?")
    let Ppoints =prompt("How many points did you get on Beauty?")
    let Mpoints =prompt("How many points did you get on Mommy?")
    Hpoints = parseInt(Hpoints)
    Ppoints = parseInt(Ppoints)
    Mpoints = parseInt(Mpoints)
    Apoints = parseInt(Apoints)

    const Apoints = (HpointS + Ppoints + Mpoints)

    console.log(`You are ${Apoints}/30 atractive!`)
} 