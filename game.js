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

function game(numBestOf) {
    let playerScore = 0;
    let computerScore = 0;
    
    //for (let i = 0; i < numRounds; i++)
    while(playerScore != (Math.ceil(numBestOf/2)) && computerScore != (Math.ceil(numBestOf/2)))
    {
        let playerSelection;
        while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors')
        {
            playerSelection = prompt("Rock, paper, or scissors?");
            playerSelection = playerSelection.toLowerCase();
            console.log(playerSelection);
            if(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors')
            {
                console.log("Invalid selection, pick again.");
            }
        }
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
        console.log("----------------------");
        console.log("------Best of " + numBestOf + "-------");
        console.log("|     Scoreboard     |");
        console.log("| Player    Computer |");
        console.log("|   " + playerScore + "           " + computerScore + "    |");
        console.log("----------------------");
    }
    
    if(playerScore > computerScore)
    {
        console.log("You won the match!")
    }
    else if(playerScore < computerScore)
    {
        console.log("You lost the match!")
    }
}

let numBestOf = prompt("Best of how many?");
game(numBestOf);