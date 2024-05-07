function getComputerChoice() {
    const randomNum = Math.random();
    let choice;
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
    let humanChoice = prompt("What do you play? (rock, paper, or scissors): ").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Invalid choice! Please choose either rock, paper, or scissors: ").toLowerCase();
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    let winner = "none. It is a tie.";

    const currentResults = results.innerHTML;

    if (humanChoice === computerChoice) {
        const newResult = "Tie! Try again.";
        console.log(newResult)
        results.innerHTML = `${currentResults} <br> ${newResult}`
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            const newResult = "You lose! Rock beats Scissors.";
            computerScore++
            winner = "computer"
            console.log(newResult)
            results.innerHTML = `${currentResults} <br> ${newResult}`
        }
        else if (computerChoice === "paper") {
            const newResult = "You win! Scissors cuts Paper.";
            humanScore++
            winner = "human"
            console.log(newResult)
            results.innerHTML = `${currentResults} <br> ${newResult}`
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++
            winner = "computer"
            const newResult = "You lose! Scissors cut Paper.";
            console.log(newResult)
            results.innerHTML = `${currentResults} <br> ${newResult}`
        }
        else if (computerChoice === "rock") {
            humanScore++
            winner = "human"
            const newResult = "You win! Paper wraps Rock.";
            console.log(newResult)
            results.innerHTML = `${currentResults} <br> ${newResult}`
        }
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            winner = "computer"
            const newResult = "You lose! Paper wraps Rock.";
            console.log(newResult)
            results.innerHTML = `${currentResults} <br> ${newResult}`
        }
        else if (computerChoice === "scissors") {
            humanScore++
            winner = "human"
            const newResult = "You win! Rock beats Scissors.";
            console.log(newResult)
            results.innerHTML = `${currentResults} <br> ${newResult}`
        }
    }
    scores.innerHTML = `Human Score: ${humanScore} <br>Computer Score: ${computerScore}`

    return winner
}


function playGame(numRounds) {

    for (let i = 0; i < numRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        winner = playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1} won by ${winner}.`)
    }

    console.log(`Human wins ${humanScore} rounds.`)
    console.log(`Computer wins ${computerScore} rounds.`)
}

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const results = document.querySelector("#results");
const scores = document.querySelector("#scores");


rockBtn.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
});