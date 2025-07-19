class Game {
  constructor(players, cards, difficulty) {
    this.players = players;
    this.cards = cards;
    this.difficulty = difficulty;
    this.score = { [players[0].id]: 0, [players[1].id]: 0 };
    this.remainingTime = 15;
  }
  startGame() {
    this.shuffleCards();
    const player1Element = document.querySelector("#player1-name");
    const player2Element = document.querySelector("#player2-name");

    player1Element.innerText = this.players[0].name;
    player2Element.innerText = this.players[1].name;

    //Create (div-> image)
    const cardsContainer = document.querySelector("#cards-container");
    for (let i = 0; i < this.cards.length; i++) {
      const cardContainer = document.createElement("div");
      const img = document.createElement("img");
      img.src = "../images/cards/guess.png";

      cardContainer.appendChild(img);
      cardsContainer.appendChild(cardContainer);

      cardContainer.addEventListener("click", () => {
        this.flipCard(this.cards[i], img);
      });
    }
  }
  flipCard(card, img) {
    //Start the timer
    this.startTimer();
    //Update image of card
    img.src = card.image;
    //set isFlipped to true
    card.isFlipped = true;
  }
  startTimer() {
    let intervalId = setInterval(() => {
      const time = document.querySelector("#time-left");
      time.innerText = this.remainingTime--;
      if (this.remainingTime < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  resetChosenCards() {
    // When
    //reset chosen cards flipped value and change img tag src attribute
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // swap
    }
  }
}
