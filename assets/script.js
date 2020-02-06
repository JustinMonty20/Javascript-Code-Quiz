// variables to manipulate the DOM
var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var startTextDiv = document.querySelector(".start-text")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons")
var timer = document.getElementById("timer");
var score = document.getElementById("score");


// event listener section
startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", function () {
    currentQuestionIndex++
    setNextQuestion();
});


// undefined variables for later use. 
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
    var intervalId = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(intervalId);

        }
    }, 1000);
}

// resetting the questions and next button each time a question is rendered in the question container. 
function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

// function to set the next question of the quiz into the container. 
function setNextQuestion() {
    resetState();
    getNextQuestion(shuffledQuestions[currentQuestionIndex]);
}

// function to get the next question from the question array & populate the answers button div. 
function getNextQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answers => {
        var button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add("btn");
        answerButtonsEl.appendChild(button);
        if(answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer);

    });
}

// callback function for the button event listener. 
function selectAnswer(e) {
    nextButton.classList.remove("hide");
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  if (correct) {
      alert("Correct!")
  } else {
      alert("Wrong!")
     
  }
}


// array of objects filled with questions and answers.  
var questions = [
    {
        question: "Inside which HTML element do we put JS?",
        answers: [
            { text: "<js>", correct: false },
            { text: "<scripting>", correct: false },
            { text: "<script>", correct: true },
            { text: "<javascript>", correct: false }
        ],

    },
    {
        question: "Which of the following types of variables is visible everywhere in your JavaScript Code?",
        answers: [
            { text: "global variable", correct: true },
            { text: "local variable", correct: false },
            { text: "regional variable", correct: false},
            { text: "national variable", correct: false }
        ],

    },
    {
        question: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        answers: [
            { text: "last()", correct: false },
            { text: "put()", correct: false },
            { text: "push()", correct: true },
            { text: "None of the above", correct: false }
        ],

    },
    {
        question: "Which of the following is an advantage of using JavaScript?",
        answers: [
            { text: "Increased interactivity.", correct: false },
            { text: "Less server interaction.", correct: false },
            { text: "Immediate feedback from the users.", correct: false },
            { text: "All of the above.", correct: true }
        ],

    }, {
        question: "How is a function called in JavaScript?",
        answers: [
            { text: "call iloveponies();", correct: false },
            { text: "call function iloveponies();", correct: false },
            { text: "iloveponies();", correct: true },
            { text: "function iloveponies()", correct: false }
        ],

    }
]
