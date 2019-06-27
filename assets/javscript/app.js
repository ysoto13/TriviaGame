// multiple choice or true or false
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.

// html stuff
// div in the div add a title
// div quiz area


// JavaScript
// jquery first and then javascript
// build functions first so they can all be equal





// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");
});




// WORK AREA
var card = $("#quiz");


var quizQuestions = [
    {
        question: "What are the names of the 7 dwarfs in the movie Snow White & the Seven Dwarfs?",
        answers: ["Doc, Snotty, Grumpy, Dopey, Sneezy, Sadness, & Shy", "Doc, Sleepy, Grandpappy, Dopey, Allergy, Happy, & Tacky", "Doc, Sleepy, Grumpy, Dopey, Flowey, Picky, & Frightful", "Doc, Sleepy, Grumpy, Dopey, Sneezy, Happy, & Bashful"],
        correctAnswer: "Doc, Sleepy, Grumpy, Dopey, Sneezy, Happy, & Bashful"
    },


    {
        question: "What color is Rapunzel's dress?",
        answers: ["pink", "yellow", "purple", "ice blue"],
        correctAnswer: "purple"
    },


    {
        question: "Which princess knows how to cook?",
        answers: ["Tiana", "Ariel", "Cinderella", "Elsa"],
        correctAnswer: "Tiana"
    },


    {
        question: "Rafiki, is from which Disney movie?",
        answers: ["The Little Mermaid", "The Lion King", "Frozen", "The Jungle Book"],
        correctAnswer: "The Lion King"
    },


    {
        question: "Where did the Beauty and the Beast movie take place?",
        answers: ["France", "Germany", "Norway", "Sweden"],
        correctAnswer: "France"
    },


    {
        question: "Which movie has the song I'll Make a Man Out of You?",
        answers: ["Aladdin", "Lilo & Stitch", "Lady And the Tramp", "Mulan"],
        correctAnswer: "Mulan"
    },


    {
        question: "What is the name of Mufasa's brother?",
        answers: ["T'Challa", "Sin", "Scar", "Al"],
        correctAnswer: "Scar"
    },


    {
        question: "What is the name of Moana's pet rooster?",
        answers: ["Chicken", "Hei Hei", "Maui", "Pua"],
        correctAnswer: "Hei Hei"

    },


    {
        question: "What is the name of Lilo's older sister?",
        answers: ["Nana", "Lola", "Nani", "Nala"],
        correctAnswer: "Nani"
    },


    {
        question: "In the movie, brave what is Merida's horse called?",
        answers: ["Hubert", "Harris", "Hamish", "Angus"],
        correctAnswer: "Angus"
    }
];



var timer;
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("Times Up!");
            game.done();
        }
    },



    start: function () {
        timer = setInterval(game.countdown, 1000);




        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < quizQuestions.length; i++) {
            card.append("<h2>" + quizQuestions[i].question + "</h2>");
            for (var j = 0; j < quizQuestions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i + "' value='" + quizQuestions[i].answers[j] + "''>" + quizQuestions[i].answers[j]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function () {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === quizQuestions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },


    result: function () {
        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        card.html("<h2>Complete!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }



};

// CLICK EVENTS

$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});
        