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
var timeLeft = 60;
var highScores = [];
var isOver = false;
var tArea = document.getElementById("textarea");
var sText = document.getElementById("subtext");
var viewEl = document.getElementById("viewHS");
var clearEl = document.getElementById("clear");


function init() {
    var storedHS = JSON.parse(localStorage.getItem("highS"));

    if(storedHS !== null) {
        highScores = storedHS;
    }

}

function storeHighS() {
    localStorage.setItem("highS", JSON.stringify(highScores));
}



var qList = ["Commonly used data types DO NOT include: ", "The condition in an if / else statement is enclosed with ______.", "Arrays in JavaScript can be used to store ______.", "String values must be enclosed within ______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is: "];
var opList = [["1. strings", "2. booleans", "3. alerts", "4. numbers", 2], ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets", 2], ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above", 3], ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis", 2], ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log", 3]];



function timer() {
    var timeInterval = setInterval(function () {
        if (isOver){
            score = score * timeLeft;// temp
            headTimer.textContent = "";
            clearInterval(timeInterval);
            displayLast();
        }
        if (timeLeft > 1) {
            headTimer.textContent = ("Timer: " + timeLeft);
            timeLeft--;
        } else {
            // change screen to highscore and option to highscore
            headTimer.textContent = "";
            clearInterval(timeInterval);
            displayLast();
        }

    }, 1000);
}


function displayNext() {

    if (promtNum===0){
        startEl.style.display= "none";
        sText.style.display = "none";
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
    sText.style.display = "block";
    tArea.style.display = "block";
    sText.textContent="Your score: " + score;
    submitEl.style.display = "block";
    tArea.setAttribute('placeholder', "Enter Initials");
    op1El.style.display = "none";
    op2El.style.display = "none";
    op3El.style.display = "none";
    op4El.style.display = "none";
    document.getElementById("foot").style.display = "none";

}

function displayHighScores() {
    displayLast();
    questionEl.textContent = "High scores";
    
    document.getElementById("restart").style.display = "block";
    clearEl.style.display = "block";

    for (var i = 0; i < highScores.length; i++) {
        var hs = highScores[i];
    
        var li = document.createElement("li");
        li.textContent = hs;
        li.setAttribute("data-index", i);

        sText.appendChild(li);
        
    }
    submitEl.style.display = "none";
    tArea.style.display = "none";
    sText.style.listStyle = "none";
}


function opClick(opNum) {
    document.getElementById("foot").style.display = "block";
    if(opList[promtNum][4] === opNum) {
        score++;
        document.getElementById("foot").textContent = "Correct!";
    } else {
        timer -= 10;
        document.getElementById("foot").textContent = "Wrong";
    }
    promtNum++;
    if (promtNum === qList.length){
        isOver = true;    //timer controls the end of the quiz
    } else {
        displayNext();
    }
}

viewEl.addEventListener("click", function() {
    sText.textContent = "";
    startEl.style.display = "none";
    displayHighScores();
});

startEl.addEventListener("click", function () {
    displayNext();
    timer();

});


submitEl.addEventListener("click", function(event) {
    var name = tArea.value;
    if (tArea !== null){
        highScores.push(name + "-" + score);
        storeHighS();
    }
    displayHighScores();//need to make display for highscores

});

clearEl.addEventListener("click", function(){
    highScores = [];
    storeHighS();
    displayHighScores();
});

op1El.addEventListener("click", function() {
    opClick(0);
});

op2El.addEventListener("click", function() {
    opClick(1);
    
});

op3El.addEventListener("click", function() {
    opClick(2);
});

op4El.addEventListener("click", function() {
    opClick(3);
});

init();