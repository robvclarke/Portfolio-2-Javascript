// Variables for points and questions 

var points = 0;
var question = 0;

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

// Logic for checking if answers are correct

function checkAnswer(userAnswer) {

    if (questions[question].answer === userAnswer) {
        points++;
        document.getElementById('score').innerHTML = points;
    } 

    question++;      
    document.getElementById('question').innerHTML = questions[question].text;
    document.getElementById('question-number').innerHTML = question;

}