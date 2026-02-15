let homeTablo = document.getElementById("homeScore")
let guestTablo = document.getElementById("guestScore")

let homeScoreValue = 0
let guestScoreValue = 0


function homeScore() {
    homeScoreValue += 1
    homeTablo.textContent = homeScoreValue
}

function homeScore2() {
    homeScoreValue += 2
    homeTablo.textContent = homeScoreValue
}

function homeScore3() {
    homeScoreValue += 3
    homeTablo.textContent = homeScoreValue
}


function guestScore() {
    guestScoreValue += 1
    guestTablo.textContent = guestScoreValue
}

function guestScore2() {
    guestScoreValue += 2
    guestTablo.textContent = guestScoreValue
}

function guestScore3() {
    guestScoreValue += 3
    guestTablo.textContent = guestScoreValue
}



