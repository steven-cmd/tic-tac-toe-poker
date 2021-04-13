console.log("the house always wins");

let idInput = document.getElementById("idInput");
let colorInput = document.getElementById("colorInput");

console.log(idInput, colorInput);

function setCard() {
  let card = document.getElementById(idInput.value);
  console.log(card);

  card.style.color = colorInput.value;
}

function reset() {
  let cards = document.querySelectorAll("section");

  for (card of cards) {
    card.style.color = "grey";
  }
}
