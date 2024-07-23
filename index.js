let countHomePoint = document.getElementById("score-home")
let countGuestPoint = document.getElementById("score-guest")
let resetHomePoint = document.getElementById("score-home")
let resetGuestPoint = document.getElementById("score-guest")
let resetHomeFoul = document.getElementById("home-foul")
let resetGuestFoul = document.getElementById("guest-foul")
let countFoulHome = document.getElementById("home-foul")
let countFoulGuest = document.getElementById("guest-foul")

let timerInterval;
let minutes = 12;
let seconds = 0;

let countHome = 0
let countGuest = 0

let countHomeFoul = 0
let countGuestFoul = 0

function add1HomePoint() {
    countHome += 1
    countHomePoint.textContent = countHome
}

function add2HomePoint() {
    countHome += 2
    countHomePoint.textContent = countHome
}

function add3HomePoint() {
    countHome += 3
    countHomePoint.textContent = countHome
}

function add1GuestPoint() {
    countGuest += 1
    countGuestPoint.textContent = countGuest
}

function add2GuestPoint() {
    countGuest += 2
    countGuestPoint.textContent = countGuest
}

function add3GuestPoint() {
    countGuest += 3
    countGuestPoint.textContent = countGuest
}

function addHomeFoul() {
    countHomeFoul += 1
    countFoulHome.textContent = countHomeFoul
}


function addGuestFoul() {
    countGuestFoul += 1
    countFoulGuest.textContent = countGuestFoul
}



function startGame() {
    if (timerInterval) return; // Prevent multiple intervals

    timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }, 1000);
}


function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetGame() {
    let countReset = 0
    resetHomePoint.textContent = countReset
    resetGuestPoint.textContent = countReset
    countHome = 0
    countGuest = 0
    let countResetFoul = 0
    resetHomeFoul.textContent = countResetFoul
    resetGuestFoul.textContent = countResetFoul
    countHomeFoul = 0
    countGuestFoul = 0
    clearInterval(timerInterval);
    timerInterval = null;
    minutes = 12;
    seconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minuteDisplay = minutes < 12 ? '0' + minutes : minutes;
    let secondDisplay = seconds < 12 ? '0' + seconds : seconds;
    document.getElementById('timer').innerText = `${minuteDisplay}:${secondDisplay}`;
}





