const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "How many continents are there on earth",
        options: ["7", "4", "5", "6"],
        answer: 0
    },
    {
        question: "What is the longest river in the world",
        options: [
            "Amazon river",
            "Nile river",
            "Yangtze river",
            "Mississippi river",
        ],
        answer: 1
    },
    {
        question: "Which of these animals is a mammal?",
        options: ["Shark", "Crocodile", "Dolphin", "Lizard"],
        answer: 1
      },

      {
        question: "Who wrote *Romeo and Juliet*?",
        options: ["William Wordsworth", "William Shakespeare", "Charles Dickens", "Jane Austen"],
        answer: 1
      },

      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: 2
      },

      {
        question: "Who painted the *Mona Lisa*?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: 2
      }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-btn");
const scoreDisplay = document.getElementById("score-display");



function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}





function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent =  `Question ${currentQuestionIndex + 1} of ${questions.length}: ${currentQuestion.question}`;
    
    optionsContainer.innerHTML = "";
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    nextButton.style.display = "none";
}



function updateScore(){
    scoreDisplay.textContent = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hide");
    resultContainer.classList.remove("hide");
    scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
}

function restartQuiz() {
    currentQuestionIndex =  Math.floor(Math.random() * questions.length); 
    score = 0;
    updateScore();
     shuffleQuestions();
    document.getElementById("quiz").classList.remove("hide");
    resultContainer.classList.add("hide");
    loadQuestion();
}




function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    
    if (selectedIndex === correctIndex) {
        score++;
        updateScore();
    }


        Array.from(optionsContainer.children).forEach((button, index) => {
        if (index === correctIndex) {
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}


nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

loadQuestion();
