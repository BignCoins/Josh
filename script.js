const multiplierElement = document.getElementById("multiplier");
const betAmountElement = document.getElementById("bet-amount");
const cashoutMultiplierElement = document.getElementById("cashout-multiplier");
const placeBetButton = document.getElementById("place-bet");

placeBetButton.addEventListener("click", () => {
  const betAmount = parseFloat(betAmountElement.value);
  const cashoutMultiplier = parseFloat(cashoutMultiplierElement.value);

  if (betAmount > 0 && cashoutMultiplier > 1) {
    startGame(betAmount, cashoutMultiplier);
  } else {
    alert("Please enter a valid bet amount and cashout multiplier.");
  }
});

function startGame(betAmount, cashoutMultiplier) {
  let currentMultiplier = 1;

  const gameInterval = setInterval(() => {
    currentMultiplier += 0.01;
    multiplierElement.textContent = currentMultiplier.toFixed(2) + "x";

    if (currentMultiplier >= cashoutMultiplier) {
      clearInterval(gameInterval);
      alert("Congratulations! You've won!");
    }
  }, 100);
}
