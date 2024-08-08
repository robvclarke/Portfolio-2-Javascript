var points = 0;
var question = 0;
var lives = 3;

var audioCorrect = new Audio('assets/mp3s/correct.mp3');
var audioIncorrect = new Audio('assets/mp3s/incorrect.mp3');
var audio = new Audio('assets/mp3s/soundtrack.mp3');

var musicOn = false;
// Logic for checking if answers are correct, increasing score, removing life and providing audio feedback for correct/incorrect answers

function checkAnswer(userAnswer) {
    if (questions[question].answer === userAnswer) {
        points++; // add 1 to point 
        document.getElementById('score').innerHTML = points;
        audioCorrect.play();
    } else {
        document.getElementById('life' + lives).innerHTML = ''; // target the correct life and remove it
        lives--; // remove 1 from Lives 
        audioIncorrect.play();
        if (lives === 0) {
            window.location.href = 'gameover.html?score=' + points; //  redirect to gameover screen
        }
    }

    question++; // add 1 to question
    if (question === 10) {
        window.location.href = 'quizcomplete.html?score=' + points; // Go to Quiz Complete page after final question
    }
    document.getElementById('question').innerHTML = questions[question].text; //  Update Question text
    document.getElementById('question-number').innerHTML = (question + 1); //  Update Question number
}

// Check url score when gameover or quiz complete page loads

window.onload = function updateScore() {
    if (window.location.pathname == '/Portfolio-2-Javascript/quizcomplete.html' || window.location.pathname == '/Portfolio-2-Javascript/gameover.html') {
        var search = window.location.search[7]; // take score from url
        if (window.location.pathname == '/Portfolio-2-Javascript/quizcomplete.html' && search === '1') {
            search = 10;
        } // if they have three lives and are on quiz success page their score is 10
        document.getElementById('final-score').innerHTML = search;
    }
};

// Function to play/pause soundtrack
function playMusic() {
    if (musicOn) {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning when paused
        musicOn = false;
    } else {
        audio.play();
        musicOn = true;
    }
}
