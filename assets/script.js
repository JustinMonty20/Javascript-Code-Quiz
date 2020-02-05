// variables to manipulate the DOM
var startButton = document.getElementById("start-button")
var startTextDiv = document.querySelector(".start-text")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons")
var timer = document.getElementById("timer");
var score = document.getElementById("score");

// undefined
var shuffledQuestions, currentQuestionIndex

// function that will run when I begin the game by clicking on the start button.
function startGame() {
startTextDiv.classList.add("hide");
startButton.classList.add("hide");
questionContainer.classList.remove("hide");
shuffledQuestions = questions.sort();
currentQuestionIndex = 0;

setTime();
setNextQuestion();

}
// function to set the time interval. 
function setTime() {
var secondsLeft = 60;
var intervalId = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(intervalId);
        console.log("game over")
    }
},1000);
}

function setNextQuestion() {
    getNextQuestion(shuffledQuestions[currentQuestionIndex])
}

// function to get the next question from the question array
function getNextQuestion(question) {
    questionEl.innerText = question.question
    
}




// event listener section
startButton.addEventListener("click", startGame);


const questions = [
    {
        question: "Inside which HTML element do we put JS?",
        answers: [
            {text: "<js>", correct: false},
            {text: "<scripting>", correct: false},
            {text: "<script>", correct: true},
            {text: "<javascript>", correct: false}
        ]
    },
    {
        question: "Which of the following types of variables is visible everywhere in your JavaScript Code?",
        answer: [
            {text:"global variable", correct: true},
            {text:"local variable", correct:false},
            {text: "regional variable",correct:false},
            {text:"national variable", correct:false}
        ]
    },
    {
        question: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        answer: [
            {text: "last()", correct: false },
            {text: "put()", correct: false},
            {text: "push()", correct: true},
            {text: "None of the above", correct: false}
        ]
    },
    {
        question: "Which of the following is an advantage of using JavaScript?",
        answer: [
            {text:"Increased interactivity.", correct: false},
            {text:" Less server interaction.", correct: false},
            {text:"Immediate feedback from the users.", correct: false },
            {text:"All of the above.", correct: true }
        ]
    }, {
        question: "How is the function called in JavaScript?",
        answer:[
            {text: "call iloveponies();", correct: false},
            {text: "call function iloveponies();", correct: false },
            {text: "iloveponies();", correct: true },
            {text: "function iloveponies()", correct: false}
        ]
    }
]
