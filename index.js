function getComputerChoice(){
    let number;
    number = Math.floor(Math.random() * 3);
    if (number == 1){
        return 'Rock';
    } else if (number == 2){
        return 'Paper';
    } else{
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == 'rock'){
        if (computerSelection.toLowerCase() == 'rock'){
            return 0;
        } else if (computerSelection.toLowerCase() == 'paper'){
            return -1;
        } else{
            return 1;
        }
    } else if (playerSelection.toLowerCase() == 'paper'){
        if (computerSelection.toLowerCase() == 'rock'){
            return 1;
        } else if (computerSelection.toLowerCase() == 'paper'){
            return 0;
        } else{
            return -1;
        }
    } else{
        if (computerSelection.toLowerCase() == 'rock'){
            return -1;
        } else if (computerSelection.toLowerCase() == 'paper'){
            return 1;
        } else{
            return 0;
        }
    }
}

function check(player_score, computer_score){
    if (player_score == 5){
        document.getElementById("Result").innerHTML = "PLAYER WON!";
        player_score = 0;
        computer_score = 0;
    }
    else if (computer_score == 5){
        document.getElementById("Result").innerHTML = "COMPUTER WON!";
        player_score = 0;
        computer_score = 0;
    }
}

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");

let player_score = 0;
let computer_score = 0;

rock.addEventListener("click", function() {
    let result = playRound("Rock", getComputerChoice());
    if (result == 1){ player_score++; }
    if (result == -1){ computer_score++;}
    if (player_score == 5){
        document.getElementById("Result").innerHTML = "PLAYER WON!";
        player_score = 0;
        computer_score = 0;
    } else if (computer_score == 5){
        document.getElementById("Result").innerHTML = "COMPUTER WON!";
        player_score = 0;
        computer_score = 0;
    } else{
        document.getElementById("Result").innerHTML = "PLAYER: " + player_score.toString() + "<br>COMPUTER: " + computer_score.toString();
    }
});
paper.addEventListener("click", function() {
    let result = playRound("Paper", getComputerChoice());
    if (result == 1){ player_score++; }
    if (result == -1){ computer_score++;}
    if (player_score == 5){
        document.getElementById("Result").innerHTML = "PLAYER WON!";
        player_score = 0;
        computer_score = 0;
    } else if (computer_score == 5){
        document.getElementById("Result").innerHTML = "COMPUTER WON!";
        player_score = 0;
        computer_score = 0;
    } else{
        document.getElementById("Result").innerHTML = "PLAYER: " + player_score.toString() + "<br>COMPUTER: " + computer_score.toString();
    }});

scissors.addEventListener("click", function() {
    let result = playRound("Scissors", getComputerChoice());
    if (result == 1){ player_score++; }
    if (result == -1){ computer_score++;}
    if (player_score == 5){
        document.getElementById("Result").innerHTML = "PLAYER WON!";
        player_score = 0;
        computer_score = 0;
    } else if (computer_score == 5){
        document.getElementById("Result").innerHTML = "COMPUTER WON!";
        player_score = 0;
        computer_score = 0;
    } else{
        document.getElementById("Result").innerHTML = "PLAYER: " + player_score.toString() + "<br>COMPUTER: " + computer_score.toString();
    }});


