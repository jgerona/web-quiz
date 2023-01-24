var startEl = document.getElementById("start");
var headTimer = document.getElementById("time");
var questionEl = document.getElementById("question");
var op1El = document.getElementById("op1");
var op2El = document.getElementById("op2");
var op3El = document.getElementById("op3");
var op4El = document.getElementById("op4");
var submitEl = document.getElementById("submit");
var promtNum = 0;
var score = 0;

var highScores = [];

//NEED TO MAKE HIGHSCORES


var qList = ["Commonly used data types DO NOT include: ", "The condition in an if / else statement is enclosed with ______.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is: "];
var opList = [["1. strings", "2. booleans", "3. alerts", "4. numbers", 2], ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets", 2], ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", 3], ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis", 2], ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log", 3]];
function timer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {

        if (timeLeft > 1) {
            headTimer.textContent = ("Timer: " + timeLeft);
            timeLeft--;
        } else {
            // change screen to score and option to highscore
            headTimer.textContent = "";
            clearInterval(timeInterval);
            displayLast();
        }

    }, 1000);
}


function displayNext() {

    if (promtNum===0){
        startEl.style.display= "none";
        document.getElementById("subtext").style.display = "none";
        op1El.style.display = "block";
        op2El.style.display = "block";
        op3El.style.display = "block";
        op4El.style.display = "block";
    }
    questionEl.textContent = qList[promtNum];
    op1El.textContent = opList[promtNum][0];
    op2El.textContent = opList[promtNum][1];
    op3El.textContent = opList[promtNum][2];
    op4El.textContent = opList[promtNum][3];
}

function displayLast() {
    questionEl.textContent = "All done!";
    document.getElementById("subtext").style.display = "block";
    document.getElementById("textarea").style.display = "block";
    document.getElementById("subtext").textContent="Your score: " + score;
    submitEl.style.display = "block";
    document.getElementById("textarea").setAttribute('placeholder', "Enter Initials");
    op1El.style.display = "none";
    op2El.style.display = "none";
    op3El.style.display = "none";
    op4El.style.display = "none";
    document.getElementById("foot").style.display = "none";

}

startEl.addEventListener("click", function () {
    displayNext();
    timer();

});

//HOW TO GRAB TEXT FROM BOX??
submitEl.addEventListener("click", function(event) {
    var name = document.getElementById("textarea").textcontent;
    document.getElementById("subtext").textContent = name;
})

op1El.addEventListener("click", function() {
    document.getElementById("foot").style.display = "block";
    if(opList[promtNum][4] === 0) {
        score++;
        document.getElementById("foot").textContent = "Correct!";
    } else {
        document.getElementById("foot").textContent = "Wrong";
    }
    promtNum++;
    if (promtNum === qList.length){
        displayLast();//need to make display for last 2 sections (finish)
    } else {
        displayNext();
    }
    
});

op2El.addEventListener("click", function() {
    document.getElementById("foot").style.display = "block";
    if(opList[promtNum][4] === 1) {
        score++;
        document.getElementById("foot").textContent = "Correct!";
    } else {
        document.getElementById("foot").textContent = "Wrong";
    }
    promtNum++;
    if (promtNum === qList.length){
        displayLast();//need to make display for last 2 sections (finish)
    } else {
        displayNext();
    }
    
});

op3El.addEventListener("click", function() {
    document.getElementById("foot").style.display = "block";
    if(opList[promtNum][4] === 2) {
        score++;
        document.getElementById("foot").textContent = "Correct!";
    } else {
        document.getElementById("foot").textContent = "Wrong";
    }
    promtNum++;
    if (promtNum === qList.length){
        displayLast();//need to make display for last 2 sections (finish)
    } else {
        displayNext();
    }
    
});

op4El.addEventListener("click", function() {
    document.getElementById("foot").style.display = "block";
    if(opList[promtNum][4] === 3) {
        score++;
        document.getElementById("foot").textContent = "Correct!";
    } else {
        document.getElementById("foot").textContent = "Wrong";
    }
    promtNum++;
    if (promtNum === qList.length){
        displayLast();//need to make display for last 2 sections (finish)
    } else {
        displayNext();
    }
    
});