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

function playRound(playerSelection, computerSelection) {
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

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));