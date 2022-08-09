function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let computerChoice;
    if(rand == 0)
    {
        computerChoice = "rock";
    }
    else if(rand == 1)
    {
        computerChoice = "paper";
    }
    else if(rand == 2)
    {
        computerChoice = "scissors";
    }

    return computerChoice;
}