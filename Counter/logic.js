let score = 0;
const scoreEl = document.querySelector(".score");
const incBtn = document.querySelector(".inc");
const decBtn = document.querySelector(".dec");
const resBtn = document.querySelector(".res");

function updateScore(value) {
  score = value;
  scoreEl.innerText = score;
  updateColor(score);
}

function updateColor(value) {
  scoreEl.classList.remove("red", "green", "yellow");
  if (value > 0) {
    scoreEl.classList.add("green");
  } else if (value < 0) {
    scoreEl.classList.add("red");
  } else {
    scoreEl.classList.add("yellow");
  }
}

incBtn.addEventListener("click", () => updateScore(score + 1));
decBtn.addEventListener("click", () => updateScore(score - 1));
resBtn.addEventListener("click", () => updateScore(0));
