// const song1 = new Audio ('../MP3/almostInLove.mp3')

// function playSongOne() {
//     console.log('playing song 1...')
//     song1.play()
// }

// function pauseSongOne() {
//     console.log('pausing song 1...')
//     song1.pause()
// }

// function loadSongOne() {
//     console.log('loading song 1...')
//     song1.load()
// }

let songPlaying = false

const song1 = new Audio('../MP3/almostInLove.mp3')
const song2 = new Audio('../MP3/winePonYou.mp3')
const song3 = new Audio('../MP3/iLikeMeBetter.mp3')

function playSongOne() {
    if (songPlaying === false) {
        song1.play()
        songPlaying = true
        document.querySelector("#text").innerText = "Song 1 playing"
        document.querySelector("#image").innerHTML = `<img src="https://i.scdn.co/image/ab67616d0000b27320ad122b6aa29a7f17fafaab" alt="">`
    }
}
function pauseSongOne() {
    if (songPlaying === true) {
        song1.pause()
        songPlaying = false
        document.querySelector("#text").innerText = "Song 1 paused"
    }
}
function loadSongOne() {
    if (songPlaying === true) {
        song1.load()
        songPlaying = false
        document.querySelector("#text").innerText = "Song 1 loading"
    }
}
function playSongTwo() {
    if (songPlaying === false) {
        song2.play()
        songPlaying = true
        document.querySelector("#text").innerText = "Song 2 playing"
        document.querySelector("#image").innerHTML = `<img src="https://i1.sndcdn.com/artworks-T1NGqyStnbZ2-0-t500x500.jpg" alt="">`
    }
}
function pauseSongTwo() {
    if (songPlaying === true) {
        song2.pause()
        songPlaying = false
        document.querySelector("#text").innerText = "Song 2 paused"
    }
}
function loadSongTwo() {
    if (songPlaying === true) {
        song2.load()
        songPlaying = false
        document.querySelector("#text").innerText = "Song 2 loading"
    }
}
function playSongThree() {
    if (songPlaying === false) {
        song3.play()
        songPlaying = true
        document.querySelector("#text").innerText = "Song 3 playing"
        document.querySelector("#image").innerHTML = `<img src="https://i1.sndcdn.com/artworks-000437758215-8uwugh-t500x500.jpg" alt="">`
    }
}
function pauseSongThree() {
    if (songPlaying === true) {
        song3.pause()
        songPlaying = false
        document.querySelector("#text").innerText = "Song 2 paused"
    }
}
function loadSongThree() {
    if (songPlaying === true) {
        song3.load()
        songPlaying = false
        document.querySelector("#text").innerText = "Song 3 loading"
    }
}

