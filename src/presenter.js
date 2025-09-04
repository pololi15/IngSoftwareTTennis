import TennisScorer from "./tennisScorer.js";

const scoreDiv = document.querySelector("#score-div");
const player1Btn = document.querySelector("#player1-btn");
const player2Btn = document.querySelector("#player2-btn");

const scorer = new TennisScorer(0, 0);

function updateScore() {
  scoreDiv.textContent = scorer.showScore();
}

player1Btn.addEventListener("click", () => {
  scorer.player1Scores();
  updateScore();
});

player2Btn.addEventListener("click", () => {
  scorer.player2Scores();
  updateScore();
});

// Mostrar marcador inicial
updateScore();