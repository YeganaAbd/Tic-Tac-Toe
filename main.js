let x_class = "x";
let o_class = "circle";
let oTurn = false;
let allCells = document.querySelectorAll(".cell");
let board = document.querySelector("#board");
let restartBtn = document.querySelector("#restart");
let winnerMsg = document.querySelector(".winner-msg");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let draw = document.querySelector(".draw");

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
let countO = 0;
let countX = 0;
let countDraw = 0;

let hasFinished = false;

allCells.forEach((cell) =>
  cell.addEventListener("click", handleClick, { once: true })
);

function handleClick(e) {
  if (hasFinished) {
    return;
  }
  let currentClick = e.target;

  // console.log(currentClick);
  if (oTurn) {
    currentClass = o_class;
  } else {
    currentClass = x_class;
  }
  clickedClass(currentClick, currentClass);
  changeTurn();
  hasFinished = checkResult();
}

function clickedClass(currentClick, currentClass) {
  currentClick.classList.add(currentClass);
  // console.log(currentClass);
}

function changeTurn() {
  oTurn = !oTurn;
}

// function collectClasses() {
//   for (let i = 0; i < allCells.length; i++) {
//     if (allCells[i].classList.contains(o_class)) {
//       arrO.push(i);
//     }
//     if (allCells[i].classList.contains(x_class)) {
//       arrX.push(i);
//     }
//   }
// }

function checkResult() {
  for (let i = 0; i < winner_result.length; i++) {
    if (
      winner_result[i].every((item) =>
        allCells[item].classList.contains(x_class)
      )
    ) {
      winnerMsg.innerText = `X won`;
      countX++;
      player1.innerText = `Player (X): ${countX}`;

      return true;
    }
    if (
      winner_result[i].every((item) =>
        allCells[item].classList.contains(o_class)
      )
    ) {
      winnerMsg.innerText = `O won`;
      countO++;
      player1.innerText = `Player (O): ${countO}`;
      return true;
    }
  }
  if (checkDraw()) {
    winnerMsg.innerText = `Draw`;
    countDraw++;
    draw.innerText = `Draw: ${countDraw}`;

    return true;
  }
  return false;
}

function checkDraw() {
  return [...allCells].every((item) => {
    return item.classList.contains(x_class) || item.classList.contains(o_class);
  });
}

restartBtn.addEventListener("click", newGame);

function newGame() {
  allCells.forEach((cell) => {
    cell.classList.remove(x_class);
    cell.classList.remove(o_class);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  hasFinished = false;
  if ((winnerMsg.innerText = `O won`)) {
    oTurn = true;
  }
  oTurn = false;
  winnerMsg.innerText = "";
}
