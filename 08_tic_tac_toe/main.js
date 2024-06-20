let gameBoard = (function () {
    let board = new Array(9).fill('');

    const playCircle = (position) => {
        if (board[position] === "") {
            board[position] = "O";
            console.log(`Circle played at position ${position}`);
            return 1;
        } else {
            console.log("Box already occupied.");
            return 2;
        }
    }

    const playEx = (position) => {
        if (board[position] === "") {
            board[position] = "X";
            console.log(`X played at position ${position}`);
            return 1;
        } else {
            console.log("Box already occupied.");
            return 2;
        }
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    }

    const getBoard = () => {
        return board;
    }

    return { board, playCircle, playEx, resetBoard, getBoard };
})();




let game = (function () {
    let turn = 0;

    function checkGameOver(board) {
        const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Top-left to bottom-right diagonal
            [2, 4, 6]  // Top-right to bottom-left diagonal
        ];

        // Check for a winner
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // Returns 'X' or 'O'
            }
        }

        // Check for a draw (no empty strings)
        if (board.every(cell => cell !== "")) {
            return 'Draw';
        }

        return null;
    }

    function playTurn(player1, player2) {
        let currentPlayer = turn % 2 === 0 ? player1 : player2;
        let value = prompt(`Turn of '${currentPlayer.name}'. Where do you want to play?`);
        if (value === 'exit') {
            return 0;
        } else if (!isNaN(value) && value >= 0 && value < 9) {
            if (currentPlayer === player1) {
                let x = gameBoard.playEx(Number(value));
                return x;
            } else {
                let x = gameBoard.playCircle(Number(value));
                return x;
            }
        } else {
            console.log("Wrong input, try again.");
            return 2;
        }
    }

    function createPlayer(name,) {

        let score = 0;

        const getScore = () => {
            return score;
        }

        const gameWon = () => {
            score++;
            console.log(`Player ${name} won! Their current score is ${score}`);
        }

        const gameLost = () => {
            console.log(`Player ${name} lost! Their current score is ${score}`);
        }

        return { name, getScore, gameWon, gameLost }
    };

    function getPlayerName(playerNumber) {
        let playerName = "";
        while (playerName.length < 1) {
            playerName = prompt(`Input player ${playerNumber} name.`);
        }
        return playerName;
    }



    const newGame = () => {
        gameBoard.resetBoard();
        console.log("Starting new game...");
        console.log(gameBoard.getBoard());
        turn = 0;

        let player1 = createPlayer(getPlayerName("X"));
        let player2 = createPlayer(getPlayerName("O"));


        while (true) {
            let value = playTurn(player1, player2);
            console.log(`Returned value is ${value}`);

            // User writes 'exit'
            if (value === 0) { break; }

            // User plays
            else if (value === 1) {
                turn++;
                console.log(`Board state after turn ${turn}: ${gameBoard.getBoard()}`);

                let winner = checkGameOver(gameBoard.getBoard());
                if (winner) {
                    handleGameOver(winner, player1, player2);
                    break;
                } else {
                    console.log("Next turn.");
                }
            }
            // User does not write a number
            else if (value === 2) {
                continue;
            }
        }
    };

    function handleGameOver(winner, player1, player2) {
        if (winner === "X") {
            console.log(`${player1.name} WINS!`);
            player1.gameWon();
            player2.gameLost();
        } else if (winner === "O") {
            console.log(`${player2.name} WINS!`);
            player2.gameWon();
            player1.gameLost();
        } else if (winner === "Draw") {
            console.log("It's a draw!");
        }
    }

    return { newGame };
})();

game.newGame();

// 
