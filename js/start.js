window.onload = function () {
  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", showSecondScreen);
  function showSecondScreen() {
    document.querySelector("#game-intro").style.display = "none";
    document.querySelector("#game-second-screen").style.display = "flex";
    document.body.style.backgroundImage = "url('../images/dust-mites1.png')";
  }

  const difficultyButton = document.querySelector("#easy");
  difficultyButton.addEventListener("click", showThirdScreen);
  function showThirdScreen() {
    document.querySelector("#game-second-screen").style.display = "none";
    document.querySelector("#game-third-screen").style.display = "flex";
    document.body.style.backgroundImage = "url('../images/train.png')";
  }
};
