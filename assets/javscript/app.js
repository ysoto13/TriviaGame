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
$( document ).ready(function() {
    console.log( "ready!" );


// WORK AREA
var card = $("quiz");

var countStartNumber = 90;

var question = [{

    question1: "What are the names of the 7 dwarfs in the movie Snow White & the Seven Dwarfs?",
    answers: ["Doc, Snotty, Grumpy, Dopey, Sneezy, Sadness, & Shy", "Doc, Sleepy, Grandpappy, Dopey, Allergy, Happy, & Tacky", "Doc, Sleepy, Grumpy, Dopey, Flowey, Picky, & Frightful", "Doc, Sleepy, Grumpy, Dopey, Sneezy, Happy, & Bashful"],
    correctAnswer: "Doc, Sleepy, Grumpy, Dopey, Sneezy, Happy, & Bashful"
},


{
    question2: "What color is Rapunzel's dress?",
    answers: ["pink", "yellow", "purple", "ice blue"],
    correctAnswer: "purple"
},


{
    question3: "Which princess knows how to cook?",
    answers: ["Tiana", "Ariel", "Cinderella", "Elsa"],
    correctAnswer: "Tiana"
},


{
    question4: "Rafiki, is from which Disney movie?",
    answers: ["The Little Mermaid", "The Lion King", "Frozen", "The Jungle Book"],
    correctAnswer: "The Lion King"
},


{
    question5: "Where did the Beauty and the Beast movie take place?",
    answers: ["France", "Germany", "Norway", "Sweden"],
    correctAnswer: "France"
},


{
    question6: "Which movie has the song I'll Make a Man Out of You?",
    answers: ["Aladdin", "Lilo & Stitch", "Lady And the Tramp", "Mulan"],
    correctAnswer: "Mulan"
},


{
    question7: "What is the name of Mufasa's brother?",
    answers: ["T'Challa", "Sin", "Scar", "Al"],
    correctAnswer: "Scar"
},


{
    question8: "What is the name of Moana's pet rooster?",
    answers: ["Chicken", "Hei Hei", "Maui", "Pua"],
    correctAnswer: "Hei Hei"

},


{
    question9: "What is the name of Lilo's older sister?",
    answers: ["Nana", "Lola", "Nani", "Nala"],
    correctAnswer: "Nani"
},


{
    question10: "In the movie, brave what is MErida's horse called?",
    answers: ["Hubert", "Harris", "Hamish", "Angus"],
    correctAnswer: "Angus"
}];




//button
var onScreenQuestions = $(".quiz").text(function question1());




// A variable to hold the set interval
var timer;

var game = {
    questions: questions,
    currentQuestions: 0,
    counter: CounterStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function(){
        // decrement counter
        game.counter --;
            // use jquery to put dynamically put logic onto the page
                // if time is up, run time up function
    },

    // loadQuestion: function(){
    //     // set timer
    //     // timer= setInterval(game.countdown, 1000)
    //     // dynamically add question into card variable
    //     // hint = car.html ("<h2>" + "</h2>")
    //     // for loop to run through the 
    //         // questions
    //         // a dynamically added buttons with answer options
    // },


    // nextQuestion: function(){
    //     // set the counter back to 30
    //     // game.counter = countStartNumber
    //     // use jquery to change the text of the game counter
    //     // increment the currentQuestion by one
    //     // call the loadQuestion function
    // },

    timeUp: function(){
        // clearInterval(timer)
        // use jquery to change the text of the game counter
        // dynamically add out of time to the card
        // append the Correct anaswer to the card
        // append image/gif to the card
    },

    results: function(){
        // clearInterval
        // dynamically add htmml to let them know of there results
        // use jquery to add htmtl of game.counter to the id of counter-number
        // add how many correct answers they got
        // add how many incorrect answer they got
        // add a start over button
    },

    clicked: function(){
        // clearInterval(timer)
        // if/else statement for when an answer is clicked
            // if correct run answeredCorrectly() function
            // else run answeredIncorrectly() function
    },

    answeredIncorrectly: function(){
        // insert text here so look at notes
        // if else statement is to freeze the image & timer before moving on
        // add a point to the incorrect column
        // clearInterval(timer)
        // dynamically add html to let them know they are wrong
        // add the right answer
        // add the image 
        // if / else statment
            // if no more question wait three seconds then show result
            // else wait three seconds and show next question
    },

    answeredCorrectly: function(){
        // insert text here so look at notes
        // if else statement is to freeze the image & timer before moving on
        // add a point to correct column
        // clearInterval(timer);
        // dynamically add html to let them know they are correct
        // add image
        // if / else statment
            // if no more question wait three seconds then show result
            // else wait three seconds and show next question

    },

    reset: function(){}
};




// // Create Click Events
//START BUTTON
// on click even here jq
$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>90</span> Seconds</h2>");
    game.loadQuestion();
    <console.log;
});

//ANSWER BUTTON
// on click even here jq
$(document).on("click", ".answer-button", function (e) {
    game.clicked(e);
    console.log;
});

//START OVER BUTTON
// on click even here jq
$(document).on("click", "#start-over", function () {
    game.reset();
    console.log;
});