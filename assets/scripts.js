// Variables for points and questions 

var points = 0;
var question = 0;
var lives = 3;

// Array of objects containing the questions and anwsers

const questions = 
[
    {
        text:'Which of these Opened in 1984?',
        answer: "dart"
    },
    {
        text:'Which carried 138 million passengers in 2019?',
        answer: "bus"
    },
    {
        text:'Which was featured in a scene in ‘The Commitments’ with the cast singing ‘Destination Anywhere’?',
        answer: "dart"
    },
    {
        text:'Which of these means ‘speed’ in Irish?',
        answer: "luas"
    },
    {
        text:'Which recently had misinformation on twitter claiming it was now free to ride?',
        answer: "luas"
    },
    {
        text:'On which of these do 90 per cent of passengers always say thank you to their driver?',
        answer: "bus"
    },
    {
        text:'Which of these services operate a ghost tour?',
        answer: "bus"
    },
    {
        text:'Which of these are manufactured in La Rochelle, France?',
        answer: "luas"
    },
    {
        text:'More than 6,000 homes could be powered by the electricity it takes to run which every year?',
        answer: "dart"
    },
    {
        text:'Former Eurovision presenter Doireann Ní Bhriain is the announcer voice on which of these??',
        answer: "luas"
    }
] 

// Logic for checking if answers are correct and removing life

function checkAnswer(userAnswer) {

    if (questions[question].answer === userAnswer) {
        points++;                                                       // add 1 to point 
        document.getElementById('score').innerHTML = points;
    } else {
        document.getElementById('life' + lives).innerHTML = '';  // target the correct life and remove it
        lives--; // remove 1 from Lives
        console.log(lives);
        if (lives === 0) {
            window.location.href='gameover.html?score='+ points;  //  redirect to gameover screen
        }
    }

    question++;      // add 1 to question
    document.getElementById('question').innerHTML = questions[question].text;   //  Update Question text
    document.getElementById('question-number').innerHTML = (question +1) ;  //  Update Question number
}

function endQuiz() {
    if (question === 9 && questions[question].answer === userAnswer) {
        window.location.href = "https://8000-harlequin-swordfish-gnmwc991.ws-eu17.gitpod.io/quizcomplete.html";
    }
} 

// Check url score when gameover page loads

window.onload = function updateScore () {
    var search = window.location.search[7]; // take score from url
    document.getElementById('final-score').innerHTML = search; 
}
