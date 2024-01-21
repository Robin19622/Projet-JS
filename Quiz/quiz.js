// Déclaration de la classe Quiz

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}
