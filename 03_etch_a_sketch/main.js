const gridDiv = document.querySelector("#grid-div");

const resetBtn = document.querySelector("#reset-button");

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let userChoice = 16;
populateGrid(userChoice);

// Clean grid
function cleanGrid() {
    gridSquares = document.querySelectorAll(".square");
    Array.from(gridSquares).forEach((square) => gridDiv.removeChild(square));
}

// Populate grid
function populateGrid(numSquares) {

    let squareWidth = 100 / numSquares;

    for (let i = 0; i < numSquares ** 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "square";
        newDiv.style.width = `${squareWidth}%`;
        newDiv.style.height = 0;
        newDiv.style.paddingBottom = `${squareWidth}%`;
        newDiv.style.display = "flex";
        newDiv.style.backgroundColor = "red";

        gridDiv.appendChild(newDiv);

        newDiv.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        })
    }
}

// Trigger Reset Button
resetBtn.addEventListener("click", function (e) {
    userChoice = undefined;
    while (!isNumeric(userChoice) || (+userChoice > 100)) {
        userChoice = prompt(`How many squares should the side of the grid have? Only integers less than 100 accepted.`);
    }
    cleanGrid();
    populateGrid(userChoice);
})