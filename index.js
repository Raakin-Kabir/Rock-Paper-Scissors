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
            return "It's a tie!";
        } else if (computerSelection.toLowerCase() == 'paper'){
            return "You lose! Paper beats rock!";
        } else{
            return "You win! Rock beats scissor!";
        }
    } else if (playerSelection.toLowerCase() == 'paper'){
        if (computerSelection.toLowerCase() == 'rock'){
            return "You win! Paper beats rock!";
        } else if (computerSelection.toLowerCase() == 'paper'){
            return "It's a tie!";
        } else{
            return "You lose! Scissor beats paper!";
        }
    } else{
        if (computerSelection.toLowerCase() == 'rock'){
            return "You lose! Scissor beats rock!";
        } else if (computerSelection.toLowerCase() == 'paper'){
            return "You win! Scissor beats paper!";
        } else{
            return "It's a tie!";
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Pick rock, paper, or scissor");
        while (playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors'){
            playerChoice = prompt("Pick rock, paper, or scissors");
        }
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

game();