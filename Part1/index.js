let row = [0, 0, 0];
let col = [0, 0, 0];
let diag = [0, 0];
let turns = 0;

let playable = true;

function play(selectedRow, selectedColumn, id) {
  if (playable) {
    let selectedBox = document.getElementById(id);
    let currentPlayer = document.getElementById("player");
    let playerSymbol = currentPlayer.innerText;

    if (!selectedBox.innerText) {
      selectedBox.innerText = playerSymbol;
    } else {
      return;
    }

    let value = playerSymbol === "X" ? 1 : -1;

    row[selectedRow] += value;
    col[selectedColumn] += value;
    if (selectedRow === selectedColumn) {
      diag[0] += value;
    }
    if (selectedRow === 2 - selectedColumn) {
      diag[1] += value;
    }

    console.log(row, col, diag);

    if (
      Math.abs(row[selectedRow]) === 3 ||
      Math.abs(col[selectedColumn]) === 3 ||
      Math.abs(diag[0]) === 3 ||
      Math.abs(diag[1]) === 3
    ) {
      alert(`${currentPlayer.innerText} is the winner!`);
      playable = false;
    } else if (turns === 8) {
      alert("No one wins.");
    }
    turns++;

    currentPlayer.innerText === "X"
      ? (currentPlayer.innerText = "O")
      : (currentPlayer.innerText = "X");
  }
}

function reset() {
  row = [0, 0, 0];
  col = [0, 0, 0];
  diag = [0, 0];
  turns = 0;
  playable = true;

  let currentPlayer = document.getElementById("player");
  currentPlayer.innerText = "X";

  let squares = document.querySelectorAll("td");

  for (square of squares) {
    square.innerText = "";
  }
}
