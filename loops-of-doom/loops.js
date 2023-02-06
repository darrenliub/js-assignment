for (love = 1; love <= 5; love++) {
    document.write('I love web dev class! <br>')
}

document.write('<br>')

for (i = 0; i <= 4; i++) {
    document.write(i)
    document.write('<br>')
}

document.write('<br>')

for (i = 15; i <= 30; i = i + 3) {
    document.write(i)
    document.write('<br>')
}

document.write('<br>')

for (blocks = 1; blocks <= 4; blocks++) {
    for (block = 1; block <= 4; block++) {
        document.write('&#x1F7EA')
    }
    document.write('<br>')
}

document.write('<br>')

for (column = 1; column <= 7; column++) {
    for (row = 1; row <= column; row++) {
        document.write('&#x1F9B4')
    }
    document.write('<br>')
}

document.write('<br>')

for (c = 1; c <= 7; c++) {
    for (w = 7; w > c; w--) {
        document.write('~ ')
    }
    for (b = 0; b < c; b++) {
        document.write('&#x1F9B4')
    }
    document.write('<br>')
}

document.write('<br>')

for (b = 1; b <= 5; b++) {
    for (a = 1; a <= b; a++) {
        document.write('<br>')
        for (s = 1; s <= a; s++) {
            document.write('&#x1F9B4')
        }
    }
    document.write('<br>')
}

document.write('<br>')