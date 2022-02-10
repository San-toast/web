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
const suitOfCards = [
  { name: "Spades", cards: cardList },
  { name: "Hearts", cards: cardList },
  { name: "Diamonds", cards: cardList },
  { name: "Clubs", cards: cardList },
];

const mainContainer = document.querySelector(".main-container");
// functions
function createCards() {
  // make as many cards as suits
  for (const suit of suitOfCards) {
    // suit: { name: "Spades", cards: cardList },
    // select

    // create
    const cardSuit = document.createElement("div");
    const cardheader = document.createElement("h1");
    // create the individual cards for each suit
    cardSuit.append(cardheader);
    for (const card of suit.cards) {
      const actualCard = document.createElement("div");
      const actualCardHeader = document.createElement("h3");
      actualCardHeader.innerText = card;

      actualCard.className = "actualCards";
      actualCard.append(actualCardHeader);
      cardSuit.append(actualCard);
    }
    // modify
    cardheader.innerText = suit.name;
    cardheader.className = "suit-header";
    cardSuit.className = suit.name;
    // append

    mainContainer.append(cardSuit);
  }
  const card = document.createElement("div");
  card.className = "card";
}
// select

// modify or create
const newButton = document.createElement("button");

newButton.innerText = "Click Me";
newButton.addEventListener("click", (e) => createCards());

// append to the to your html
mainContainer.append(newButton);
// mainContainer.append(card);
