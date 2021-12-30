let x_class = "x";
let o_class = "circle";
let oTurn = "";
let allCells = document.querySelectorAll(".cell");
let board = document.querySelector("#board");
let restartBtn = document.querySelector("#restart");
let winnerMsg = document.querySelector(".winner-msg");

const winner_result = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let arrX = [];
let arrO = [];

allCells.forEach((cell) =>
  cell.addEventListener("click", handleClick, { once: true })
);

function handleClick(e) {
  let currentClick = e.target;
  // console.log(currentClick);
  if (oTurn) {
    currentClass = o_class;
  } else {
    currentClass = x_class;
  }
  clickedClass(currentClick, currentClass);
  changeTurn();
  checkWinner();
  checkResult();
}

function clickedClass(currentClick, currentClass) {
  currentClick.classList.add(currentClass);
  // console.log(currentClass);
}

function changeTurn() {
  oTurn = !oTurn;
}

function checkWinner() {
  for (let i = 0; i < allCells.length; i++) {
    if (allCells[i].classList.contains(o_class)) {
      arrO.push(i);
    }
    if (allCells[i].classList.contains(x_class)) {
      arrX.push(i);
    }
  }
}

function checkResult(draw) {
  if (draw) {
    winnerMsg.innerText = `Draw`;
  }
  for (let i = 0; i < winner_result.length; i++) {
    if (winner_result[i].every((item) => arrX.includes(item))) {
      winnerMsg.innerText = `X won`;
    }
    if (winner_result[i].every((item) => arrO.includes(item))) {
      winnerMsg.innerText = `O won`;
    }
  }
}
function checkDraw() {
  return [...allCells].every((item) => {
    return item.classList.contains(x_class) || item.classList.contains(o_class);
  });
}
