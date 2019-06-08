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
    $("#start-button").click(function () {



        // WORK AREA
        var card = $("#quiz");

        var countStartNumber = 90;

        var correctAnswers = ["Doc, Sleepy, Grumpy, Dopey, Sneezy, Happy, & Bashful", "purple", "Tiana", "The Lion King", "France", "Mulan", "Scar", "Hei Hei", "Nani", "Angus"];

        var question = [{

            question1: "What are the names of the 7 dwarfs in the movie Snow White & the Seven Dwarfs?",
            answers: ["Doc, Snotty, Grumpy, Dopey, Sneezy, Sadness, & Shy", "Doc, Sleepy, Grandpappy, Dopey, Allergy, Happy, & Tacky", "Doc, Sleepy, Grumpy, Dopey, Flowey, Picky, & Frightful", "Doc, Sleepy, Grumpy, Dopey, Sneezy, Happy, & Bashful"],
            // correctAnswer: "Doc, Sleepy, Grumpy, Dopey, Sneezy, Happy, & Bashful"
        },


        {
            question2: "What color is Rapunzel's dress?",
            answers: ["pink", "yellow", "purple", "ice blue"],
            // correctAnswer: "purple"
        },


        {
            question3: "Which princess knows how to cook?",
            answers: ["Tiana", "Ariel", "Cinderella", "Elsa"],
            // correctAnswer: "Tiana"
        },


        {
            question4: "Rafiki, is from which Disney movie?",
            answers: ["The Little Mermaid", "The Lion King", "Frozen", "The Jungle Book"],
            // correctAnswer: "The Lion King"
        },


        {
            question5: "Where did the Beauty and the Beast movie take place?",
            answers: ["France", "Germany", "Norway", "Sweden"],
            // correctAnswer: "France"
        },


        {
            question6: "Which movie has the song I'll Make a Man Out of You?",
            answers: ["Aladdin", "Lilo & Stitch", "Lady And the Tramp", "Mulan"],
            // correctAnswer: "Mulan"
        },


        {
            question7: "What is the name of Mufasa's brother?",
            answers: ["T'Challa", "Sin", "Scar", "Al"],
            // correctAnswer: "Scar"
        },


        {
            question8: "What is the name of Moana's pet rooster?",
            answers: ["Chicken", "Hei Hei", "Maui", "Pua"],
            // correctAnswer: "Hei Hei"

        },


        {
            question9: "What is the name of Lilo's older sister?",
            answers: ["Nana", "Lola", "Nani", "Nala"],
            // correctAnswer: "Nani"
        },


        {
            question10: "In the movie, brave what is Merida's horse called?",
            answers: ["Hubert", "Harris", "Hamish", "Angus"],
            // correctAnswer: "Angus"
        }];






        // A variable to hold the set interval
        function start() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000 * 9);
        }


        var game = {
            questions: questions,
            currentQuestions: 0,
            counter: CounterStartNumber,
            correct: 0,
            incorrect: 0,

            countdown: function () {
                // decrement counter
                function decrement() {
                    game.counter--;
                    $("show").html("<h1>" + number + "</h1>");
                    if (!clockRunning) {
                        intervalId = setInterval(count, 1000 * 10);
                        countdown = true;
                    }
                }
                if (number === 0) {
                    timeUp();
                    alert("Time is Up!!");
                }
        },


            timeUp: function () {
                clearInterval(intervalId);
    },

        results: function () {
            // clearInterval
            clearInterval(intervalId);
            $("#results").append("<h2>Results!!</h2>")
            // dynamically add htmml to let them know of there results
            // use jquery to add htmtl of game.counter to the id of counter-number
            $(".counter-number").html(game.counter)
            // add how many correct answers they got

            // add how many incorrect answer they got
            // add a start over button
        },

        clicked: function () {
            // clearInterval(timer)
            clearInterval(countdown);
            // if/else statement for when an answer is clicked

            // if correct run answeredCorrectly() function
            // else run answeredIncorrectly() function
        },

        answeredIncorrectly: function () {

            // clearInterval(timer)
            clearInterval(countdown);
            // if / else statment
        },

        answeredCorrectly: function () {
            // clearInterval(timer);
            clearInterval(countdown);
            // if / else statment
        },

        run();

};




// // Create Click Events
//START BUTTON
// on click even here jq
$("#start").on("click", start);


//SUBMIT BUTTON
// on click even here jq
$("#submit-button").on("click", submit - button);

//START OVER BUTTON
// on click even here jq
$("#start-over").on("click", start - over);

start();

    });
});