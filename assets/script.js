// variables to manipulate the DOM
var startButton = document.getElementById("start-button");
var startTextDiv = document.querySelector(".start-text")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var submission = document.getElementById("submit-form");

var secondsLeft = 60;


// undefined variables for later use.
var myQuestion, currentQuestionIndex, intervalId

// event listeners
startButton.addEventListener("click", startGame);

// Functions to generate right and wrong text depending on the users choice. 
function displayCorrectMessage() {
    startTextDiv.style.fontSize = "50px";
    startTextDiv.textContent = "Correct!";
    startTextDiv.classList.remove("hide");

    setTimeout(function () {
        startTextDiv.classList.add("hide");
    }, 1000)
}

function displayWrongMessage() {
    startTextDiv.style.fontSize = "50px";
    startTextDiv.textContent = "Wrong!";
    startTextDiv.classList.remove("hide");

    setTimeout(function () {
        startTextDiv.classList.add("hide");
    }, 1000)
}

// function that will run when I begin the game by clicking on the start button.
function startGame() {
    startTextDiv.classList.add("hide");
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    myQuestion = questions.sort();
    currentQuestionIndex = 0;

    setTime();
    setNextQuestion();
};
// function to set the time interval. 
function setTime() {
        intervalId = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(intervalId);
        } 
    }, 1000);
}

// resetting the questions and next button each time a question is rendered in the question container. 
function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

// function to set the next question of the quiz into the container. 
function setNextQuestion() {
    resetState();
    getNextQuestion(myQuestion[currentQuestionIndex]);
}

// function to get the next question from the question array & populate the answers button div. 
function getNextQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answers => {
        var button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add("btn");
        answerButtonsEl.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer);

    });
}

// callback function for the button event listener. 
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct

    if (correct) {
        displayCorrectMessage();
    } else {
        displayWrongMessage();
        secondsLeft = secondsLeft - 5;
    }

    if (myQuestion.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
        setNextQuestion();
    } else {
        score.textContent = secondsLeft;
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}


// function clearAll() {
//     score.textContent = ""
//     timer.textContent = ""
// }
// this function should dynamically create a form where the user can place their initials.  
// function createSubmitForm() {
//     var submitForm = document.createElement("form") 
//     console.log(submitForm);

// }



// console.log(questions[0].answers[0].text)
// console.log(questions[3].answers[2].correct)
// console.log(questions[4].answers[3].text)

