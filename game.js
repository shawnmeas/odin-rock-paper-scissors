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
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection)
    {
        result = 'draw';
        return result;
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

    return result;
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
function game() {
    let playerScore = 0;
    let computerScore = 0;

    /*
    Prompt for how many non-draw rounds are played to determine match results
    Could also be written as "score to win" or "first to (n) wins" to do away with need for math equation in while loop
    Writing it this way because I tend to say "best of 3" or "best of 5" when playing with someone
    */
    let numBestOf = prompt("Best of how many?");
    
    //Loop until either playerScore or computerScore reaches the amount of wins needed for the "best of" series
    while(playerScore != (Math.ceil(numBestOf/2)) && computerScore != (Math.ceil(numBestOf/2)))
    {
        let playerSelection;
        //Basic messy error checking that person entered rock/paper/scissors
        //Input is sanitized to lowercase, so only matters if something completely different is entered
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

        //Adjusts score based on winner of round
        if(result == 'win')
        {
            playerScore = incrementScore(playerScore);
        }
        else if(result == 'loss')
        {
            computerScore = incrementScore(computerScore);
        }

        //Fancy scoreboard printout
        console.log(printOutcome(playerSelection, computerSelection, result));
        console.log("----------------------");
        console.log("------Best of " + numBestOf + "-------");
        console.log("|     Scoreboard     |");
        console.log("| Player    Computer |");
        console.log("|   " + playerScore + "           " + computerScore + "    |");
        console.log("----------------------");
    }

    //Determine winner by comparing final scores
    if(playerScore > computerScore)
    {
        console.log("You won the match!")
    }
    else if(playerScore < computerScore)
    {
        console.log("You lost the match!")
    }
}

game();