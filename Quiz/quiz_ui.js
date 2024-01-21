/*
Ce fichier gère les différents fonctionnalitées du quiz :
- La gestion du timer
- L'affichage des questions et des réponses
- La gestion des réponses des utilisateurs
*/

let timer;
let timeForQuestion = 30;

// Démarre le timer pour chaque question
function startTimer() {
    let timeLeft = timeForQuestion;
    timer = setInterval(() => {
        document.getElementById('timer').innerText = `Temps restant: ${timeLeft} secondes`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            moveToNextQuestion();
        } else {
            timeLeft--;
        }
    }, 1000);
}

// Passe à la question suivante du quiz
function moveToNextQuestion() {
    if (quiz.isEnded()) {
        displayScore();
    } else {
        quiz.questionIndex++;
        displayQuestion();
        displayChoices();
        startTimer();
    }
}

// Affiche la question actuelle à l'utilisateur
function displayQuestion() {
    clearInterval(timer);
    startTimer();
    const question = quiz.getCurrentQuestion().text;
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = question;
    displayProgress();
    displayChoices();
}

// Affiche les choix pour la question actuelle
function displayChoices() {
    const choices = quiz.getCurrentQuestion().choices;
    choices.forEach((choice, i) => {
        const choiceElement = document.getElementById(`choice${i}`);
        choiceElement.innerHTML = choice;
        guessHandler(`guess${i}`, choice);
    });
}

// Affiche le score final à la fin du quiz
function displayScore() {
    const scoreElement = document.getElementById('quiz');
    const totalQuestions = quiz.questions.length;
    const score = quiz.score;
    const percentage = (score / totalQuestions) * 100;
    
    let scoreHTML = "<h1>Resultat</h1>";
    scoreHTML += "<h2>Ton score: " + score + " / " + totalQuestions + "</h2>";
    scoreHTML += "<h2>Pourcentage de réussite: " + percentage.toFixed(2) + "%</h2>";
    scoreHTML += "<button id='playAgain' class='btn--default'>Rejouer</button>";
    scoreElement.innerHTML = scoreHTML;
    
    const playAgainButton = document.getElementById('playAgain');
    playAgainButton.addEventListener('click', resetQuiz);
}
    
// Gère le choix de réponse
function guessHandler(id, guess) {
    const button = document.getElementById(id);
    button.onclick = () => handleGuess(guess, id);
}

// Gère la logique après qu'un utilisateur a fait un choix
function handleGuess(guess, buttonId) {
    clearInterval(timer);
    const isCorrect = quiz.getCurrentQuestion().isCorrectAnswer(guess);
    displayFeedback(isCorrect, buttonId);
    quiz.guess(guess);
    setTimeout(moveToNextQuestion, 1000);
}

// Passe à la question suivante du quiz
function moveToNextQuestion() {
    clearInterval(timer);
    if (quiz.isEnded()) {
        displayScore();
    } else {
        quiz.questionIndex++;
        if (quiz.isEnded()) {
            displayScore();
        } else {
            displayQuestion();
        }
    }
}
    
// Affiche le résultat de la réponse (correct ou non)
function displayFeedback(isCorrect, buttonId) {
    const button = document.getElementById(buttonId);
    if (isCorrect) {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
    setTimeout(() => {
        button.style.backgroundColor = '';
    }, 1000);
}
    
    
// Affiche la progression actuelle du quiz
function displayProgress() {
    const currentQuestionNumber = quiz.questionIndex + 1;
    const totalQuestions = quiz.questions.length;
    const progressElement = document.getElementById("progress");
    const progressBarElement = document.getElementById("progress-bar");
    
    const percentage = (currentQuestionNumber / totalQuestions) * 100;
    progressBarElement.style.width = percentage + "%";
    
    progressElement.innerHTML = "Question " + currentQuestionNumber + " / " + totalQuestions;
}
    
// Réinitialise le quiz
function resetQuiz() {
    location.reload();
}


displayQuestion();
displayChoices();
displayProgress();
