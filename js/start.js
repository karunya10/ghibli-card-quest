window.onload = function () {
  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", showSecondScreen);
  function showSecondScreen() {
    document.querySelector("#game-intro").style.display = "none";
    document.querySelector("#game-second-screen").style.display = "flex";
    document.body.style.backgroundImage = "url('../images/dust-mites1.png')";
  }
};
