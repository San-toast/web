// Select player and dealer
const deal = document.querySelector(".dealbutton");
const player = document.querySelector(".player");
const dealer = document.querySelector(".dealer");
const dScore = document.querySelector(".dealerScore");
const pScore = document.querySelector(".playerScore");
const reset = document.querySelector(".resetButton");

const cardList = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
const cardSuits = ["Spades", "Diamonds", "Clubs", "Hearts"];

function faceCards() {}

function dealCards() {
  const hand2 = {
    suit: "",
    value: "",
  };
  const randomSuit = Math.floor(Math.random() * cardSuits.length);
  const randomCardList = Math.floor(Math.random() * cardList.length);
  hand2.suit = cardSuits[randomSuit];
  //   add your conditional
  hand2.value = cardList[randomCardList];

  console.log(hand2);
  return hand2;
}

function startGame() {
  const dealerHandElement = document.createElement("img");
  const playerHandElement = document.createElement("img");
  const dealerHand = dealCards();
  const playerHand = dealCards();

  //dealer gets a card related to suit and value
  dealerHandElement.className = "dealerCards";
  dealerHandElement.src = `./images/${
    dealerHand.value
  }_of_${dealerHand.suit.toLowerCase()}.png`;
  //player gets a card related to suit and value
  playerHandElement.className = "playerCards";
  playerHandElement.src = `./images/${
    playerHand.value
  }_of_${playerHand.suit.toLowerCase()}.png`;

  player.append(playerHandElement);
  dealer.append(dealerHandElement);
  if (
    dealerHand.value === "Jack" ||
    dealerHand.value === "Queen" ||
    dealerHand.value === "King"
  ) {
    dealerHand.value = "10";
  } else if (dealerHand.value === "Ace") {
    dealerHand.value = "1";
  }
  if (playerHand.value === "Jack") {
    playerHand.value = "10";
  } else if (playerHand.value === "Queen") {
    playerHand.value = "10";
  } else if (playerHand.value === "King") {
    playerHand.value = "10";
  } else if (playerHand.value === "Ace") {
    playerHand.value = "1";
  }

  dScore.innerText = parseInt(dScore.innerText) + parseInt(dealerHand.value);
  pScore.innerText = parseInt(pScore.innerText) + parseInt(playerHand.value);
}
dScore.innerText = 0;
pScore.innerText = 0;
deal.addEventListener("click", () => {
  startGame();
});
reset.addEventListener("click", () => {
  window.location.reload();
});
