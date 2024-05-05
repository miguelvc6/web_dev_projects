function getComputerChoice() {
    const randomNum = Math.random();
    var choice;
    if (randomNum < 1 / 3) {
        choice = "rock"
    }
    else if (randomNum < 2 / 3) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }

    return choice
}


function getHumanChoice() {
    var humanChoice = prompt("What do you play? (rock, paper, or scissors): ").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice! Please choose either rock, paper, or scissors: ").toLowerCase();
    }

    return humanChoice;
}


function playRound(humanChoice, computerChoice) {

    var winner = "none. It is a tie.";

    if (humanChoice === computerChoice) {
        console.log("Tie! Try again.")
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.")
            computerScore++
            winner = "computer"
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors cuts Paper.")
            humanScore++
            winner = "human"
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors cut Paper.")
            computerScore++
            winner = "computer"
        }
        else if (computerChoice === "rock") {
            console.log("You win! Paper wraps Rock.")
            humanScore++
            winner = "human"
        }
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper wraps Rock.")
            computerScore++
            winner = "computer"
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.")
            humanScore++
            winner = "human"
        }
    }
    return winner
}


function playGame(numRounds) {
    
    for (let i = 0; i < numRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        winner = playRound(humanSelection, computerSelection);
        console.log(`Round ${i+1} won by ${winner}.`)
    }

    console.log(`Human wins ${humanScore} rounds.`)
    console.log(`Computer wins ${computerScore} rounds.`)
}

var humanScore = 0;
var computerScore = 0;

playGame(5)