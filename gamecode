const startButton = document.getElementById("start-game");
const gameText = document.getElementById("game-text");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");

let gameStarted = false;

startButton.addEventListener("click", startGame);

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        startButton.style.display = "none";
        gameText.innerHTML = "You find yourself in a dense jungle. Which way do you want to go?";
        choice1.innerHTML = "Go left into the jungle";
        choice2.innerHTML = "Go right along the river";
        choice1.addEventListener("click", goLeft);
        choice2.addEventListener("click", goRight);
    }
}

function goLeft() {
    gameText.innerHTML = "You venture deep into the jungle and discover a hidden cave filled with treasure. You win!";
    choice1.style.display = "none";
    choice2.style.display = "none";
}

function goRight() {
    gameText.innerHTML = "You follow the river but get caught in a deadly current. Game over!";
    choice1.style.display = "none";
    choice2.style.display = "none";
}
