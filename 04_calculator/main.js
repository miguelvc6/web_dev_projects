let firstNumber = "0";
let secondNumber = "";
let operator = "";
let step = 1;

const idToOperator = {
  add: "+",
  substract: "-",
  multiply: "*",
  divide: "/",
};

// operations logic
function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

// buttons logic
let numberBtnIds = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
numberBtnIds.forEach(function (int) {
  intBtn = document.querySelector(`#btn${int}`);
  intBtn.addEventListener("click", () => registerInt(int));
});

function registerInt(int) {
  if (step === 1) {
    firstNumber += int;
  } else if (step === 2) {
    secondNumber += int;
  }
}

let operatorBtnIds = ["add", "substract", "multiply", "divide"];
operatorBtnIds.forEach(function (op) {
  document
    .querySelector(`#${op}`)
    .addEventListener("click", () => registerOperator(idToOperator[op]));
});

function registerOperator(operatorLocal) {
  if (step === 1) {
    operator = operatorLocal;
    step++;
  } else if (step === 2) {
    solution = registerEquals(firstNumber, secondNumber, operator);
    firstNumber = solution;
    secondNumber = "";
    operator = operatorLocal;
  }
}

document.querySelector("#equals").addEventListener("click", () => {
  console.log(registerEquals());
  step = 1;
});

function registerEquals() {
  let solution;
  if (step == 1) {
    solution = firstNumber;
  } else if (step == 2) {
    solution = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
  }
  if (solution === Infinity || solution === -Infinity) {
    firstNumber = "";
    secondNumber = "";
    document.querySelector("#display").textContent = "No divide by zero youu.";
  } else {
    firstNumber = solution;
    secondNumber = "";
    document.querySelector("#display").textContent =
      parseFloat(solution).toFixed(2);
  }

  return solution;
}

document
  .querySelector("#clear")
  .addEventListener("click", () => registerClear());

function registerClear() {
  step = 1;
  firstNumber = "";
  secondNumber = "";
}
