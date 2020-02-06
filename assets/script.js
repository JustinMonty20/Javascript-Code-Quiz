// variables to manipulate the DOM
var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var startTextDiv = document.querySelector(".start-text")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var secondsLeft = 60;

// undefined variables for later use.
var myQuestion, currentQuestionIndex

// event listeners
startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", function () {
    currentQuestionIndex++
    setNextQuestion();
});

// Functions to generate right and wrong text depending on the users choice. 
function displayCorrectMessage() {
    startTextDiv.style.fontSize = "50px";
    startTextDiv.textContent = "Correct!"
    startTextDiv.classList.remove("hide");

    setTimeout(function () {
        startTextDiv.classList.add("hide");
    }, 1000)
}

function displayWrongMessage() {
    startTextDiv.style.fontSize = "50px";
    startTextDiv.textContent = "Wrong!"
    startTextDiv.classList.remove("hide");

    setTimeout(function () {
        startTextDiv.classList.add("hide");
    }, 1000)
}

function createSubmitForm() {
    var submitForm = document.createElement = "form"

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
}



// function to set the time interval. 
function setTime() {
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
    nextButton.classList.remove("hide");
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct

    if (correct) {
        displayCorrectMessage();
    } else {
        displayWrongMessage();
        secondsLeft = secondsLeft - 5;
    }

    if (myQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        score.textContent = secondsLeft;
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        createSubmitForm()
    }
}


// console.log(questions[0].answers[0].text)
// console.log(questions[3].answers[2].correct)
// console.log(questions[4].answers[3].text)

