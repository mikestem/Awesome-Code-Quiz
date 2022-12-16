var timeRemaining = document.querySelector("#timeRemaining");
var questionsList = document.querySelector("#questionsList");
var start = document.querySelector("#start")
var wrapper = document.querySelector("#wrapper");
var score = 0;
var questionIndex = 0;

var questions = [
    {
        title: "What element is used to store multiple values in a single variable?",
        choices: ["functions", "strings", "arrays", "variables"],
        answer: "arrays"
    },
    {
        title: "What is a block of code called that is used to perform a specific task?",
        choices: ["string", "function", "boolean", "null"],
        answer: "function"
    },
    {
        title: "One loop inside the body of another loop is called",
        choices: ["double loops", "confusing", "nested", "no word for it"],
        answer: "nested"
    },
    {
        title: "Which of the following in NOT a Primitive data type",
        choices: ["string", "Nnumber", "boolean", "object"],
        answer: "object" 
    },

];

var secondsLeft = 50;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

start.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timeRemaining.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                timeRemaining.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    questionsList.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsList.textContent = userQuestion;
    }
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsList.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}