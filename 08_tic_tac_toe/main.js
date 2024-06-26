let gameBoard = (function () {
    const EMPTY = 0;
    const PLAYER_X = 1;
    const PLAYER_O = 2;

    let board = Array(9).fill(EMPTY);
    let boardElement = document.querySelector("#board");

    function makeMove(index, player) {
        if (board[index] === EMPTY) {
            board[index] = player;
            updateDisplay();
            return true;
        }
        return false;
    }

    function updateDisplay() {
        for (let i = 0; i < board.length; i++) {
            let square = boardElement.querySelector(`#position_${i} img`);
            switch (board[i]) {
                case PLAYER_X:
                    square.src = "media/x.png";
                    break;
                case PLAYER_O:
                    square.src = "media/circle.png";
                    break;
                default:
                    square.removeAttribute('src');
            }
        }
    }

    function resetBoard() {
        board = Array(9).fill(EMPTY);
        updateDisplay();
    }

    function getBoard() {
        return [...board];
    }

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for (let combo of winningCombos) {
            if (board[combo[0]] !== EMPTY &&
                board[combo[0]] === board[combo[1]] &&
                board[combo[0]] === board[combo[2]]) {
                return board[combo[0]];
            }
        }

        if (board.every(cell => cell !== EMPTY)) {
            return 'Draw';
        }

        return null;
    }

    return { makeMove, resetBoard, getBoard, checkWinner, PLAYER_X, PLAYER_O };
})();

function createPlayer(name) {
    let score = 0;
    const getScore = () => score;
    const gameWon = () => {
        score++;
        console.log(`Player ${name} won! Their current score is ${score}`);
    };
    const gameLost = () => {
        console.log(`Player ${name} lost! Their current score is ${score}`);
    };
    const resetScore = () => {
        score = 0;
    };
    return { name, getScore, gameWon, gameLost, resetScore };
}

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#new_game form");
    let player1, player2;

    function updateScoreDisplay() {
        document.getElementById('player1_score').textContent = `${player1.name}: ${player1.getScore()}`;
        document.getElementById('player2_score').textContent = `${player2.name}: ${player2.getScore()}`;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let player1Input = document.querySelector("#player1");
        let player2Input = document.querySelector("#player2");

        // Create new players or reset scores if names changed
        if (!player1 || player1.name !== player1Input.value) {
            player1 = createPlayer(player1Input.value);
        } else {
            player1.resetScore();
        }

        if (!player2 || player2.name !== player2Input.value) {
            player2 = createPlayer(player2Input.value);
        } else {
            player2.resetScore();
        }

        updateScoreDisplay();

        let game = (function (player1, player2) {
            let turn = 0;

            function handleGameOver(winner) {
                if (winner === gameBoard.PLAYER_X) {
                    console.log(`${player1.name} WINS!`);
                    player1.gameWon();
                    player2.gameLost();
                } else if (winner === gameBoard.PLAYER_O) {
                    console.log(`${player2.name} WINS!`);
                    player2.gameWon();
                    player1.gameLost();
                } else if (winner === 'Draw') {
                    console.log("It's a draw!");
                }
                updateScoreDisplay();
                setTimeout(newGame, 1000); // Delay to allow players to see the final board
            }

            function playTurn(event) {
                let square = event.target.closest('.position');
                if (!square) return; // Clicked outside a valid square

                let index = square.dataset.index;
                let currentPlayer = turn % 2 === 0 ? gameBoard.PLAYER_X : gameBoard.PLAYER_O;

                const value = gameBoard.makeMove(index, currentPlayer);
                if (value) {
                    let winner = gameBoard.checkWinner();
                    if (winner) {
                        handleGameOver(winner);
                    } else {
                        turn++;
                    }
                }
            }

            const newGame = () => {
                console.log("New game.");
                gameBoard.resetBoard();
                turn = 0;

                let gridSquares = document.querySelectorAll("#board .position");
                gridSquares.forEach((square) => {
                    square.removeEventListener("click", playTurn);
                    square.addEventListener("click", playTurn);
                });
            };

            return { newGame };
        })(player1, player2);

        game.newGame();
    });
});
