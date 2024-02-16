const questions = [
   
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '2', correct: false },
            { text: '22', correct: false },
            { text: '20', correct: false }
        ]
    },
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'London', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Madrid', correct: false }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { text: 'Harper Lee', correct: true },
            { text: 'J.K. Rowling', correct: false },
            { text: 'William Shakespeare', correct: false },
            { text: 'Stephen King', correct: false }
        ]
    }
];
const qus = document.querySelector("#qus");
const btn = document.querySelector(".btn");
const nextButton = document.querySelector("#next");

let currentQueIndex = 0;
let score = 0;


