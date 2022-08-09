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

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    let result;
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection)
    {
        result = 'draw';
        return result;
    }
    else if(playerSelection == 'rock')
    {
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

    return result;
}

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

function game(playerScore, computerScore) {
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = 'rock';
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if(result == 'win')
        {
            playerScore = incrementScore(playerScore);
        }
        else if(result == 'loss')
        {
            computerScore = incrementScore(computerScore);
        }
        console.log(printOutcome(playerSelection, computerSelection, result));
        console.log('----------------------');
        console.log('|     Scoreboard     |')
        console.log('| Player    Computer |')
        console.log('|   ' + playerScore + '           ' + computerScore + '    |');
        console.log('----------------------');
    }
}
let playerScore = 0;
let computerScore = 0;
game(playerScore, computerScore);