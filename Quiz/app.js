// Start the application 
let questions = [
    new Question("Quel opérateur est utilisé pour assigner une valeur à une variable en JavaScript?", ["*", "-", "=", "+"], "="),
    new Question("Comment déclarer une variable en JavaScript?", ["variable x", "var x", "x var", "declare x"], "var x"),
    new Question("Quelle méthode est utilisée pour parser une chaîne de caractères en entier en JavaScript?", ["Integer.parse", "parseInt()", "parseInteger()", "toInt()"], "parseInt()"),
    new Question("Comment écrire une condition IF en JavaScript?", ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"], "if (i == 5)"),
    new Question("Quel est le bon endroit pour insérer un script JavaScript?", ["Le section 'head'", "Les sections 'head' et 'body'", "Le section 'body'", "Aucun des précédents"], "Les sections 'head' et 'body'"),
    // Vous pouvez ajouter plus de questions ici
];

let quiz = new Quiz(questions);

// Logique pour démarrer le quiz et gérer la logique de passage des questions

displayQuestion();
displayChoices();
displayProgress();
