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