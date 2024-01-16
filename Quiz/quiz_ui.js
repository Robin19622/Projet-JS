    function displayQuestion() {
        var question = quiz.getCurrentQuestion().text;
        var questionElement = document.getElementById("question");
        questionElement.innerHTML = question;
        displayProgress();
    }

    function displayChoices() {
        var choices = quiz.getCurrentQuestion().choices;
        for(var i = 0; i < choices.length; i++) {
            var choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guessHandler("guess" + i, choices[i]);
        }
    }

    function displayScore() {
        var scoreElement = document.getElementById('quiz');
        var totalQuestions = quiz.questions.length;
        var score = quiz.score;
        var percentage = (score / totalQuestions) * 100;

        var scoreHTML = "<h1>Result</h1>";
        scoreHTML += "<h2>Your score: " + score + " out of " + totalQuestions + "</h2>";
        scoreHTML += "<h2>Percentage: " + percentage.toFixed(2) + "%</h2>";
        scoreHTML += "<button id='playAgain' class='btn--default'>Play Again</button>";
        scoreElement.innerHTML = scoreHTML;

        document.getElementById('playAgain').addEventListener('click', resetQuiz);
    }


    function guessHandler(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            if (quiz.isEnded()) {
                displayScore();
            } else {
                displayQuestion();
                displayChoices();
            }
        }
    }

    function displayProgress() {
        var currentQuestionNumber = quiz.questionIndex + 1;
        var totalQuestions = quiz.questions.length;
        var progressElement = document.getElementById("progress");
        progressElement.innerHTML = "Question " + currentQuestionNumber + " of " + totalQuestions;
    }
    

    function resetQuiz() {
        quiz = new Quiz(questions);
        displayQuestion();
        displayChoices();
        displayProgress();
    }


    displayQuestion();
    displayChoices();
    displayProgress();
