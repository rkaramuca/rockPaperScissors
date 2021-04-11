const player = document.querySelector('#human');
const computer = document.querySelector('#cpu');
const winMessage = document.querySelector('#winner');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#resetButton');
let playerScore = 0;
let cpuScore = 0;
let round = 1;

// pick a random selection for the computer
function computerPlay() {
    // lets the return value be one of the array values for less code
    let plays = ["Rock", "Paper", "Scissors"];
    let choice = Math.round(Math.random() * 2);
   
    return plays[choice];
}

// play a round and return the result as an int
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    }
    // all 'losing' conditions for the player return losing message
    else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
        return 1;
    }
    // all 'winning' conditions for the player return winning message
    else if (computerSelection === "Rock" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Scissors" || computerSelection === "Scissors" && playerSelection === "Rock") {
        return 2;
    }
}

// plays a round, adds points, and determines a winner
function game(playerSelection) {
    // prompts the player for an input and saves the output phrase to the winner variable to determine who won using if/else if/ else 
    let winner = playRound(playerSelection, computerPlay());

    // if the player wins
    if (winner === 2) {
        playerScore++;
        player.innerText = `Player: ${playerScore}`;
        winMessage.innerText = `Round ${round}: You won that round!`;
    }
    // if computer wins
    else if (winner === 1) {
        cpuScore++;
        computer.innerText = `Computer: ${cpuScore}`;
        winMessage.innerText = `Round ${round}: Computer won that round :(`;
    }
    // if a draw
    else if (winner === 0) {
        winMessage.innerText = `Round ${round}: This round was a tie.`
    }

    // if the player has won
    if (playerScore === 5) {
        winMessage.innerText = "You win! You beat the computer.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    // if the computer has won
    if (cpuScore === 5) {
        winMessage.innerText = "Computer wins :( Better luck next time.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    round++;
}

// add button events
rock.addEventListener('click', function() {
    game("Rock");
})
paper.addEventListener('click', function() {
    game("Paper");
})
scissors.addEventListener('click', function() {
    game("Scissors");
})
reset.addEventListener('click', function() {
    winMessage.innerText = 'Click your selection to start the game!';
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playerScore = 0;
    cpuScore = 0;
    player.innerText = 'Player: 0';
    computer.innerText = 'Computer: 0';
    round = 1;
})