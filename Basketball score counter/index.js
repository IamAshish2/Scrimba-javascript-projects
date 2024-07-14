let scoreHome = 0;
let scoreGuest = 0;

const scoreCount = document.querySelector('.score');
const guestScore = document.getElementById('guest-score');

// Higher-order function to update the score
function updateScore(scoreType, increment, element) {
    scoreType += increment;
    element.innerText = scoreType;
    return scoreType;
}

// Home team score functions
function increaseByOne() {
    scoreHome = updateScore(scoreHome, 1, scoreCount);
}

function increaseByTwo() {
    scoreHome = updateScore(scoreHome, 2, scoreCount);
}

function increaseByThree() {
    scoreHome = updateScore(scoreHome, 3, scoreCount);
}

// Guest team score functions
function increaseByOneGuest() {
    scoreGuest = updateScore(scoreGuest, 1, guestScore);
}

function increaseByTwoGuest() {
    scoreGuest = updateScore(scoreGuest, 2, guestScore);
}

function increaseByThreeGuest() {
    scoreGuest = updateScore(scoreGuest, 3, guestScore);
}
