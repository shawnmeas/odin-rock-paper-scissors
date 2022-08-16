//Function to randomly choose the computer's choice of rock/paper/scissors
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let computerChoice;
    if(rand == 0)
    {
        computerChoice = 'rock';
    }
    else if(rand == 1)
    {
        computerChoice = 'paper';
    }
    else if(rand == 2)
    {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

//Compares the player's choice with the computer's choice, and returns win/loss/draw
function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection == computerSelection)
    {
        result = 'draw';
    }
    else if(playerSelection == 'rock')
    {
        //Returns error if for some reason computerSelection isn't win or loss
        result = computerSelection == 'scissors' ? 'win' : computerSelection == 'paper' ? 'loss' : 'error';
    }
    else if(playerSelection == 'paper')
    {
        result = computerSelection == 'rock' ? 'win' : computerSelection == 'scissors' ? 'loss' : 'error';
    }
    else if(playerSelection == 'scissors')
    {
        result = computerSelection == 'paper' ? 'win' : computerSelection == 'rock' ? 'loss' : 'error';
    }

    playerChoiceImage.src = "images/" + playerSelection + ".png";
    computerChoiceImage.src = "images/" + computerSelection + ".png";

    console.log("Your choice: " + playerSelection);
    console.log("Comp choice: " + computerSelection);
    console.log(result);

    show();

    return result;
}

function displayOutcome() {

}

//Function to print both player and computer choice, as well as round result
//Takes result from previously run playRound() function
function printOutcome(playerSelection, computerSelection, result) {
    console.log("Your choice: " + playerSelection);
    console.log("Comp choice: " + computerSelection);
    if(result == 'draw')
    {
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
    else if(result == 'win')
    {
        return "You win!";
    }
    else if(result == 'loss')
    {
        return "You lose!";
    }
}

function incrementScore(currentScore) {
    let newScore = currentScore + 1;
    return newScore;
}

//Main function
function game(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if(result == 'win')
    {
        playerScore = incrementScore(playerScore);
        playerScoreText.textContent = playerScore;
        outcomeText.textContent = capitalizeFirst(playerSelection) + " beats " + capitalizeFirst(computerSelection) + ". You win!";
    }
    else if(result == 'loss')
    {
        computerScore = incrementScore(computerScore);
        computerScoreText.textContent = computerScore;
        outcomeText.textContent = capitalizeFirst(playerSelection) + " beats " + capitalizeFirst(computerSelection) + ". You lose!";
    }
    else if(result == 'draw')
    {
        outcomeText.textContent = "Draw!";
    }

    if(playerScore > 2)
    {
//        fadeOut('game');
        document.getElementById('game').style.opacity = 0;
        document.getElementById('game').style.pointerEvents = "none";
        document.getElementById('matchtext').style.opacity = 1;
        matchText.textContent = "You won the match. Click to play again."
    }
    else if(computerScore > 2)
    {
//        fadeOut('game');
        document.getElementById('game').style.opacity = 0;
        document.getElementById('game').style.pointerEvents = "none";
        document.getElementById('matchtext').style.opacity = 1;
        matchText.textContent = "You lost the match. Click to play again."
    }

    

    //Loop until either playerScore or computerScore reaches the amount of wins needed for the "best of" series
}

function resetGame() {
    hide();
    console.log('reset clicked');
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    document.getElementById('game').style.opacity = 1;
    document.getElementById('game').style.pointerEvents = "auto";
    document.getElementById('matchtext').style.opacity = 0;
}

function hide() {
    for(let i = 0; i < hideTargets.length; i++)
    {
        hideTargets[i].style.visibility = "hidden";
    }
}

function show() {
    for(let i = 0; i < hideTargets.length; i++)
    {
        hideTargets[i].style.visibility = "visible";
    }
}

function capitalizeFirst(input) {
    let output = input.charAt(0).toUpperCase() + input.slice(1);
    return output;
}

//game();
let hideTargets = document.querySelectorAll(".hideme");
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
const playerScoreText = document.getElementById("playerscore");
const computerScoreText = document.getElementById("computerscore");
const playerChoiceImage = document.getElementById("playerchoice");
const computerChoiceImage = document.getElementById("computerchoice");
const outcomeText = document.getElementById("outcome");
const matchText = document.getElementById("matchtext");

playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore;

buttons.forEach((button) =>
    button.addEventListener('click', () => {
        console.log(button.id);
        game(button.id);
    })
);

matchText.addEventListener('click', () => {
    resetGame();
});

hide();