window.onload = function () {
  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", showSecondScreen);
  function showSecondScreen() {
    document.querySelector("#game-intro").style.display = "none";
    document.querySelector("#game-second-screen").style.display = "flex";
    document.body.style.backgroundImage = "url('../images/dustMites.png')";
  }

  const difficultyButton = document.querySelector("#easy");
  difficultyButton.addEventListener("click", showThirdScreen);
  function showThirdScreen() {
    document.querySelector("#game-second-screen").style.display = "none";
    document.querySelector("#game-third-screen").style.display = "flex";
    document.body.style.backgroundImage = "url('../images/train.png')";

    let player1Name = document.querySelector("#player1").value;
    let player2Name = document.querySelector("#player2").value;

    //Create Player Objects
    let player1 = new Player(player1Name);
    let player2 = new Player(player2Name);

    //Create Cards Object
    let cards = [];
    for (let i = 0; i < 8; i++) {
      let card = new Card(i, `../images/cards/${i % 4}.png`);
      cards.push(card);
    }

    let difficulty = difficultyButton.id;

    //Create Game Object
    let game = new Game([player1, player2], cards, difficulty);
    console.log(game);

    //Start the game
    game.startGame();
  }
};
