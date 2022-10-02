function countDownTimer() {
    //countdownTimer will go from 50 to 0 by increments of 5
    console.log("countDownTimer() started");
    var currTime = 50;
    var sum = 0;
    document.getElementById("countDis").innerHTML = currTime + " seconds";
    //45 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 5000);
    //40 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 10000);
    //35 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 15000);
    //30 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 20000);
    //25 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 25000);
    //20 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 30000);
    //15 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 35000);
    //10 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 40000);
    //5 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " seconds";
    }, 45000);
    //blastoff display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("countDis").innerHTML = "Blastoff";
    }, 50000);
}


//craps

function playCraps(){
    //troubleshooting playCraps() has started
    console.log("playCraps() started")

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6*Math.random());
    die2 = Math.ceil(6*Math.random());

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "Die 1 is " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 is " + die2;
    document.getElementById("gameRes").innerHTML = "Game Result is " + (sum = die1 + die2);

    //check if craps
    //check if win
    //check if tie
    if (sum == 7 || sum == 11){
        console.log("you lose");
        document.getElementById("gameRes").innerHTML = "You didn't win, try again.";
    } else if (die1%2 == 0 && die1 == die2){
        console.log("you win");
        document.getElementById("gameRes").innerHTML = "You win, try again.";
    } else {
        console.log("you tie");
        document.getElementById("gameRes").innerHTML = "You didn't win or lose, try again.";
    }
}