window.onload = function () {
  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", showSecondScreen);
  function showSecondScreen() {
    document.querySelector("#game-intro").style.display = "none";
    document.querySelector("#game-second-screen").style.display = "flex";
    document.body.style.backgroundImage = "url('../images/dustMites.png')";
  }

  const easyButton = document.querySelector("#easy");
  easyButton.addEventListener("click", () => showThirdScreen("easy"));

  const mediumButton = document.querySelector("#hard");
  mediumButton.addEventListener("click", () => showThirdScreen("hard"));

  //Function to show third scren
  function showThirdScreen(difficulty) {
    document.querySelector("#game-second-screen").style.display = "none";
    document.querySelector("#game-third-screen").style.display = "flex";

    document.body.style.backgroundImage = "url('../images/train.png')";

    // Get Playernames from second screen
    let player1Name = document.querySelector("#player1").value;
    let player2Name = document.querySelector("#player2").value;

    //Create Player Objects
    let player1 = new Player(player1Name);
    let player2 = new Player(player2Name);

    let noOfCards = difficulty === "easy" ? 8 : 12;

    //manipulating the grid to accomodate increasing number of cards
    const grid = document.querySelector("#cards-container");
    const columns = noOfCards === 8 ? 4 : 6;
    grid.style.gridTemplateColumns = `repeat(${columns}, 200px)`;

    //Create Cards Object
    let cards = [];
    // TODO: Currently we are hardcoding number of cards
    for (let i = 0; i < noOfCards; i++) {
      const id = `c${i % (noOfCards / 2)}`;
      let card = new Card(id, `../images/cards/${i % (noOfCards / 2)}.png`);
      cards.push(card);
    }

    //Create Game Object
    let game = new Game(player1, player2, cards, difficulty);
    console.log(game);

    //Start the game
    game.startGame();
  }
};
