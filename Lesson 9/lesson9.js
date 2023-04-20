// class Cookie {
//     constructor(color, candy) {
//         this.color = color
//         this.candy = candy
//         this.type = "gingerbread"
//         this.calories = 205
//     }
//     eatCookie() {
//         console.log('cookie was eaten...')
//     }
//     gteCookieInfo() {
//         console.log('this is a ${this.type} cookie and it is ${this.color} with ${this.candy} and has ${this.calories} calories.')
//     }
// }

// const cookie1 = new Cookie('blue', 'm&m')
// const cookie2 = new Cookie('red', 'twix')


class Movie {
    constructor(name, genre) {
        this.name = name
        this.genre = genre
        this.time = "1~3 hours"
    }
    playMovie() {
        console.log('movie is playing...')
    }
}

const movie1 = new Movie('The Evil Dead', 'horror')
const movie2 = new Movie('The Roundup', 'action')
const movie3 = new Movie('Tenet', 'sicene fiction')

class Music {
    constructor(name, genre) {
        this.name = name
        this.genre = genre
        this.artist = "Shawn Mendes"
    }
    playMusic() {
        console.log('music is playing...')
    }
}

const music1 = new Music("When Your're Gone", 'pop music')
const music2 = new Music('Summer of Love', 'R&B')
const music3 = new Music('Particular Taste', 'pop')