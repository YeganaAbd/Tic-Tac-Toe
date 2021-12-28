let board = document.querySelector("#board");
let allCells = document.querySelectorAll(".cell");
let restartBtn = document.querySelector("#restart");
allCells.forEach((cell) => cell.addEventListener("click", handleClick));

function handleClick(e) {
  let clickedCell = e.target;
}
